const CACHE_NAME = 'maths-perriand-v3-network-first';

// Installation immédiate : la nouvelle version prend le relais sans attendre
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activation : supprime tous les anciens caches périmés et contrôle immédiatement les onglets ouverts
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((oldKey) => caches.delete(oldKey))
      ))
      .then(() => self.clients.claim())
  );
});

// Interception des requêtes : Réseau d'abord sur le portail, zéro interférence avec Supabase
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 1. Ne jamais intercepter POST/PUT/DELETE ni les requêtes hors du domaine du portail (Supabase, CDN, YouTube...)
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // 2. Toujours demander la version à jour à Vercel (Network-First), puis repli sur le cache si hors-ligne
  event.respondWith(
    fetch(url.href, { cache: 'no-cache' })
      .then((networkResponse) => {
        if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return networkResponse;
      })
      .catch(async () => {
        const cached = await caches.match(req);
        if (cached) return cached;
        if (req.mode === 'navigate') {
          return caches.match('/') || caches.match('/index.html');
        }
        return new Response('Hors connexion', { status: 503, statusText: 'Offline' });
      })
  );
});
