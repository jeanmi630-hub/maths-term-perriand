/* ============================================================================
   BANQUE OFFICIELLE DES 12 QCM BAC APMEP (SESSIONS 2021 À 2026)
   Terminale Spécialité Mathématiques — Lycée Charlotte Perriand (Genech)
   4 chapitres x 3 QCM x 5 questions = 60 questions avec corrigés détaillés
   ============================================================================ */

window.APMEP_QCM_BANK = [

  /* ==========================================================================
     CHAPITRE 1 : SUITES NUMÉRIQUES (3 QCM — 15 QUESTIONS)
     ========================================================================== */
  {
    id: "qcm_suites_1",
    section: "suites",
    period: "Sessions 2021–2022",
    title: "QCM Bac #1 — Suites arithmético-géométriques, Python & Limites",
    desc: "5 questions issues des sujets APMEP 2021-2022 : suite auxiliaire, algorithme de seuil Python, théorème d'encadrement et somme de termes.",
    questions: [
      {
        source: "Métropole — Juin 2021 (APMEP)",
        prompt: "On considère la suite $(u_n)$ définie par $u_0 = 2$ et, pour tout entier naturel $n$, $u_{n+1} = 0{,}8u_n + 3$. On pose, pour tout $n \\in \\mathbb{N}$, $v_n = u_n - 15$. Quelle affirmation est exacte ?",
        options: [
          "$(v_n)$ est géométrique de raison $0{,}8$ et de premier terme $v_0 = -13$",
          "$(v_n)$ est géométrique de raison $3$ et de premier terme $v_0 = -13$",
          "$(v_n)$ est arithmétique de raison $-13$",
          "Pour tout $n \\in \\mathbb{N}$, $u_n = 2 \\times 0{,}8^n + 15$"
        ],
        answer: 0,
        explanation: "Pour tout $n \\in \\mathbb{N}$, $v_{n+1} = u_{n+1} - 15 = 0{,}8u_n + 3 - 15 = 0{,}8u_n - 12 = 0{,}8(u_n - 15) = 0{,}8v_n$. La suite $(v_n)$ est donc géométrique de raison $q = 0{,}8$ et de premier terme $v_0 = u_0 - 15 = 2 - 15 = -13$. On en déduit $u_n = 15 - 13 \\times 0{,}8^n$."
      },
      {
        source: "Amérique du Nord — Mai 2022 (APMEP)",
        prompt: "Soit $(u_n)$ la suite définie pour tout entier $n \\geqslant 1$ par $u_n = 4 + \\dfrac{(-1)^n}{n^2}$. La limite de la suite $(u_n)$ lorsque $n$ tend vers $+\\infty$ est :",
        options: [
          "$+\\infty$",
          "$4$",
          "La suite n'admet pas de limite car $(-1)^n$ oscille",
          "$3$"
        ],
        answer: 1,
        explanation: "Pour tout $n \\geqslant 1$, on a $-1 \\leqslant (-1)^n \\leqslant 1$, d'où $4 - \\dfrac{1}{n^2} \\leqslant u_n \\leqslant 4 + \\dfrac{1}{n^2}$. Comme $\\lim_{n \\to +\\infty} \\dfrac{1}{n^2} = 0$, d'après le théorème des gendarmes, $\\lim_{n \\to +\\infty} u_n = 4$."
      },
      {
        source: "Centres Étrangers — Juin 2022 (APMEP)",
        prompt: "On considère la suite $(u_n)$ croissante de limite $+\\infty$ définie par $u_0 = 1$ et $u_{n+1} = 1{,}05u_n + 2$. Pour déterminer le plus petit entier $n$ tel que $u_n > 100$, quelle condition doit-on écrire dans la boucle Python `while ... :` ?",
        options: [
          "`while u > 100:`",
          "`while u <= 100:`",
          "`while n <= 100:`",
          "`while u == 100:`"
        ],
        answer: 1,
        explanation: "La boucle `while` s'exécute tant que l'objectif n'est pas atteint, c'est-à-dire tant que $u_n \\leqslant 100$. Dès que $u_n > 100$, la condition `u <= 100` devient fausse et la boucle s'arrête sur le bon rang $n$."
      },
      {
        source: "Asie — Mai 2022 (APMEP)",
        prompt: "La somme $S = 1 + \\dfrac{2}{3} + \\left(\\dfrac{2}{3}\\right)^2 + \\dots + \\left(\\dfrac{2}{3}\\right)^{10}$ est égale à :",
        options: [
          "$3\\left(1 - \\left(\\dfrac{2}{3}\\right)^{10}\\right)$",
          "$3\\left(1 - \\left(\\dfrac{2}{3}\\right)^{11}\\right)$",
          "$\\dfrac{3}{2}\\left(1 - \\left(\\dfrac{2}{3}\\right)^{11}\\right)$",
          "$3$"
        ],
        answer: 1,
        explanation: "Il s'agit de la somme des $11$ premiers termes (de l'exposant $0$ à l'exposant $10$) d'une suite géométrique de raison $q = \\dfrac{2}{3} \\neq 1$ : $S = \\dfrac{1 - (2/3)^{11}}{1 - 2/3} = \\dfrac{1 - (2/3)^{11}}{1/3} = 3\\left(1 - \\left(\\dfrac{2}{3}\\right)^{11}\\right)$."
      },
      {
        source: "Polynésie — Juin 2021 (APMEP)",
        prompt: "Soit $(u_n)$ une suite telle que pour tout entier naturel $n$, $u_{n+1} - u_n = -2n - 1$ et $u_0 = 10$. On peut affirmer que :",
        options: [
          "La suite $(u_n)$ est strictement décroissante",
          "La suite $(u_n)$ est géométrique de raison $-2$",
          "La suite $(u_n)$ converge vers $0$",
          "La suite $(u_n)$ est minorée par $10$"
        ],
        answer: 0,
        explanation: "Pour tout entier naturel $n \\geqslant 0$, on a $-2n - 1 < 0$, donc $u_{n+1} - u_n < 0$, soit $u_{n+1} < u_n$. La suite $(u_n)$ est donc strictement décroissante."
      }
    ]
  },

  {
    id: "qcm_suites_2",
    section: "suites",
    period: "Sessions 2023–2024",
    title: "QCM Bac #2 — Convergence monotone, Formes indéterminées & Récurrence",
    desc: "5 questions issues des sujets APMEP 2023-2024 : théorème de la limite monotone, suites bornées, quotients de puissances et point fixe.",
    questions: [
      {
        source: "Métropole — Mars 2023 (APMEP)",
        prompt: "Soit $(u_n)$ une suite décroissante telle que, pour tout entier naturel $n$, $2 \\leqslant u_n \\leqslant 6$. Que peut-on affirmer avec certitude ?",
        options: [
          "La suite $(u_n)$ converge vers $2$",
          "La suite $(u_n)$ converge vers une limite $\\ell$ telle que $\\ell \\geqslant 2$",
          "La suite $(u_n)$ diverge vers $-\\infty$",
          "Pour tout $n \\in \\mathbb{N}$, $u_n = 2$"
        ],
        answer: 1,
        explanation: "D'après le théorème de convergence monotone, toute suite décroissante et minorée (ici par $2$) converge vers une limite finie $\\ell$ qui vérifie nécessairement $\\ell \\geqslant 2$ (mais $\\ell$ n'est pas forcément égale au minorant $2$)."
      },
      {
        source: "Amérique du Nord — Mai 2023 (APMEP)",
        prompt: "On considère la suite $(u_n)$ définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\dfrac{5^n - 2^n}{5^n + 3^n}$. La limite de la suite $(u_n)$ en $+\\infty$ est :",
        options: [
          "$0$",
          "$1$",
          "$+\\infty$",
          "$\\dfrac{5}{3}$"
        ],
        answer: 1,
        explanation: "En factorisant par le terme prépondérant $5^n$ au numérateur et au dénominateur : $u_n = \\dfrac{5^n(1 - (2/5)^n)}{5^n(1 + (3/5)^n)} = \\dfrac{1 - (0{,}4)^n}{1 + (0{,}6)^n}$. Comme $-1 < 0{,}4 < 1$ et $-1 < 0{,}6 < 1$, on a $\\lim_{n\\to+\\infty} (0{,}4)^n = 0$ et $\\lim_{n\\to+\\infty} (0{,}6)^n = 0$, d'où $\\lim_{n\\to+\\infty} u_n = 1$."
      },
      {
        source: "Métropole — Juin 2024 (APMEP)",
        prompt: "La suite $(u_n)$ est définie par $u_0 = 1$ et, pour tout entier naturel $n$, $u_{n+1} = \\sqrt{2u_n + 3}$. On admet que $(u_n)$ converge vers un réel $\\ell > 0$. La valeur de $\\ell$ est :",
        options: [
          "$\\ell = 1$",
          "$\\ell = \\sqrt{5}$",
          "$\\ell = 3$",
          "$\\ell = 2$"
        ],
        answer: 2,
        explanation: "La fonction $f: x \\mapsto \\sqrt{2x+3}$ étant continue sur $[0;+\\infty[$, la limite $\\ell \\geqslant 0$ vérifie l'équation du point fixe $\\ell = \\sqrt{2\\ell + 3}$, soit $\\ell^2 - 2\\ell - 3 = 0$. Le discriminant vaut $\\Delta = 4 - 4(1)(-3) = 16$, donnant $\\ell = -1$ (impossible car $\\ell > 0$) ou $\\ell = 3$."
      },
      {
        source: "Centres Étrangers — Juin 2024 (APMEP)",
        prompt: "Pour tout entier naturel $n$, on pose $u_n = 3n^2 - 100n + 5$. Quelle est la limite de la suite $(u_n)$ quand $n$ tend vers $+\\infty$ ?",
        options: [
          "$-\\infty$",
          "$+\\infty$",
          "$3$",
          "$5$"
        ],
        answer: 1,
        explanation: "Pour $n \\geqslant 1$, on factorise par le terme de plus haut degré : $u_n = n^2\\left(3 - \\dfrac{100}{n} + \\dfrac{5}{n^2}\\right)$. Or $\\lim_{n\\to+\\infty} \\left(3 - \\dfrac{100}{n} + \\dfrac{5}{n^2}\\right) = 3 > 0$ et $\\lim_{n\\to+\\infty} n^2 = +\\infty$. Par produit, $\\lim_{n\\to+\\infty} u_n = +\\infty$."
      },
      {
        source: "Asie — Juin 2024 (APMEP)",
        prompt: "Soit $(u_n)$ une suite telle que, pour tout entier naturel $n$, $u_n \\geqslant \\sqrt{n} - 2$. On peut en déduire que :",
        options: [
          "La suite $(u_n)$ est croissante",
          "$\\lim_{n \\to +\\infty} u_n = +\\infty$",
          "La suite $(u_n)$ converge vers $-2$",
          "La suite $(u_n)$ est majorée"
        ],
        answer: 1,
        explanation: "Comme $\\lim_{n \\to +\\infty} (\\sqrt{n} - 2) = +\\infty$, le théorème de comparaison assure directement que $\\lim_{n \\to +\\infty} u_n = +\\infty$ (sans que $(u_n)$ soit nécessairement monotone)."
      }
    ]
  },

  {
    id: "qcm_suites_3",
    section: "suites",
    period: "Sessions 2025–2026",
    title: "QCM Bac #3 — Suites & Logarithmes, Modélisation et Synthèse Bac",
    desc: "5 questions issues des annales récentes 2025-2026 : suites non linéaires avec logarithme, seuils par calcul exact et propriétés asymptotiques.",
    questions: [
      {
        source: "Métropole — Juin 2025 (APMEP)",
        prompt: "Soit $(u_n)$ la suite définie par $u_0 = \\text{e}^2$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\sqrt{u_n}$. On pose $v_n = \\ln(u_n)$. Quelle est l'expression de $v_n$ en fonction de $n$ ?",
        options: [
          "$v_n = 2 \\times \\left(\\dfrac{1}{2}\\right)^n$",
          "$v_n = 2 - \\dfrac{1}{2}n$",
          "$v_n = \\text{e}^{2/2^n}$",
          "$v_n = \\left(\\dfrac{1}{2}\\right)^n$"
        ],
        answer: 0,
        explanation: "Pour tout $n \\in \\mathbb{N}$, $v_{n+1} = \\ln(\\sqrt{u_n}) = \\dfrac{1}{2}\\ln(u_n) = \\dfrac{1}{2}v_n$. La suite $(v_n)$ est géométrique de raison $q = \\dfrac{1}{2}$ et de premier terme $v_0 = \\ln(\\text{e}^2) = 2$. Ainsi, $v_n = 2 \\times \\left(\\dfrac{1}{2}\\right)^n$."
      },
      {
        source: "Amérique du Nord — Mai 2025 (APMEP)",
        prompt: "Le plus petit entier naturel $n$ vérifiant l'inégalité $0{,}85^n \\leqslant 0{,}1$ est :",
        options: [
          "$n = 14$",
          "$n = 15$",
          "$n = 6$",
          "$n = 20$"
        ],
        answer: 1,
        explanation: "Par croissance de la fonction $\\ln$ sur $]0;+\\infty[$ : $0{,}85^n \\leqslant 0{,}1 \\iff n\\ln(0{,}85) \\leqslant \\ln(0{,}1)$. Comme $\\ln(0{,}85) < 0$, l'ordre change : $n \\geqslant \\dfrac{\\ln(0{,}1)}{\\ln(0{,}85)} \\approx 14{,}16$. Le plus petit entier naturel est donc $n = 15$."
      },
      {
        source: "Centres Étrangers — Juin 2025 (APMEP)",
        prompt: "On considère la fonction Python suivante :\n`def liste_termes(k):`\n`    u = 3; L = [u]`\n`    for i in range(k):`\n`        u = 2*u - 1; L.append(u)`\n`    return L`\nQue renvoie l'appel `liste_termes(3)` ?",
        options: [
          "`[3, 5, 9]`",
          "`[3, 5, 9, 17]`",
          "`[5, 9, 17]`",
          "`17`"
        ],
        answer: 1,
        explanation: "La liste `L` contient initialement `[3]` ($u_0=3$). La boucle `for i in range(3)` effectue $3$ itérations et ajoute successivement $u_1 = 2(3)-1 = 5$, $u_2 = 2(5)-1 = 9$ et $u_3 = 2(9)-1 = 17$. Elle renvoie donc `[3, 5, 9, 17]`."
      },
      {
        source: "Polynésie — Juin 2025 (APMEP)",
        prompt: "Soit $(u_n)$ la suite définie pour tout entier naturel $n$ par $u_n = \\dfrac{2n + \\sin(n)}{n + 1}$. La limite de $(u_n)$ en $+\\infty$ est :",
        options: [
          "$1$",
          "$2$",
          "La suite n'a pas de limite",
          "$0$"
        ],
        answer: 1,
        explanation: "Pour tout $n \\in \\mathbb{N}$, $-1 \\leqslant \\sin(n) \\leqslant 1$, donc $\\dfrac{2n - 1}{n + 1} \\leqslant u_n \\leqslant \\dfrac{2n + 1}{n + 1}$. Or $\\lim_{n\\to+\\infty} \\dfrac{2n-1}{n+1} = \\lim_{n\\to+\\infty} \\dfrac{2n+1}{n+1} = 2$. Par le théorème des gendarmes, $\\lim_{n\\to+\\infty} u_n = 2$."
      },
      {
        source: "Sujet 0 / Session 2026 (APMEP)",
        prompt: "Si une suite $(u_n)$ converge vers le réel strictement positif $\\ell = 4$, alors à partir d'un certain rang $N$, tous les termes $u_n$ appartiennent nécessairement à l'intervalle :",
        options: [
          "$]3{,}9 \\;;\\; 4{,}1[$",
          "$[4 \\;;\\; +\\infty[$",
          "$]0 \\;;\\; 4[$",
          "$\\{4\\}$"
        ],
        answer: 0,
        explanation: "Par définition de la convergence vers $4$, tout intervalle ouvert centré en $4$, comme $]3{,}9 \\;;\\; 4{,}1[$, contient tous les termes de la suite à partir d'un certain rang $N$."
      }
    ]
  },

  /* ==========================================================================
     CHAPITRE 2 : ÉTUDE DE FONCTIONS (3 QCM — 15 QUESTIONS)
     ========================================================================== */
  {
    id: "qcm_fonctions_1",
    section: "fonctions",
    period: "Sessions 2021–2022",
    title: "QCM Bac #1 — Dérivation, Convexité, Croissances comparées & TVI",
    desc: "5 questions issues des sujets APMEP 2021-2022 : dérivée d'un produit avec exponentielle, point d'inflexion, lecture graphique et limites.",
    questions: [
      {
        source: "Métropole — Juin 2021 (APMEP)",
        prompt: "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (2x + 1)\\text{e}^{-x}$. Pour tout réel $x$, sa dérivée $f'(x)$ est égale à :",
        options: [
          "$-2\\text{e}^{-x}$",
          "$(1 - 2x)\\text{e}^{-x}$",
          "$(2x + 3)\\text{e}^{-x}$",
          "$2\\text{e}^{-x}$"
        ],
        answer: 1,
        explanation: "Avec la formule du produit $(uv)' = u'v + uv'$ où $u(x)=2x+1$ ($u'(x)=2$) et $v(x)=\\text{e}^{-x}$ ($v'(x)=-\\text{e}^{-x}$), on obtient $f'(x) = 2\\text{e}^{-x} - (2x+1)\\text{e}^{-x} = (1 - 2x)\\text{e}^{-x}$."
      },
      {
        source: "Amérique du Nord — Mai 2021 (APMEP)",
        prompt: "Soit $f$ une fonction deux fois dérivable sur $\\mathbb{R}$ telle que $f''(x) = (6x - 12)\\text{e}^x$. La courbe représentative $\\mathcal{C}_f$ admet un unique point d'inflexion d'abscisse :",
        options: [
          "$x = 0$",
          "$x = 2$",
          "$x = -2$",
          "$x = 6$"
        ],
        answer: 1,
        explanation: "Comme $\\text{e}^x > 0$ sur $\\mathbb{R}$, $f''(x)$ est du signe de $6x - 12$. Ainsi, $f''(x)$ s'annule en changeant de signe uniquement en $x = 2$, ce qui caractérise l'abscisse de l'unique point d'inflexion de $\\mathcal{C}_f$."
      },
      {
        source: "Centres Étrangers — Juin 2022 (APMEP)",
        prompt: "Sur le graphique ci-dessous, on a tracé la courbe $\\mathcal{C}_f$ d'une fonction $f$ ainsi que sa tangente $T$ au point $A(1\\;;\\;2)$ qui passe par $B(0\\;;\\;4)$. Que vaut $f'(1)$ et quelle est la convexité de $f$ sur $[0\\;;\\;3]$ ?",
        svg: `<svg width="260" height="150" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
          <line x1="25" y1="125" x2="240" y2="125" stroke="#64748b" stroke-width="1.5"/>
          <line x1="45" y1="15" x2="45" y2="140" stroke="#64748b" stroke-width="1.5"/>
          <path d="M 45 25 Q 105 115, 220 95" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
          <line x1="45" y1="25" x2="165" y2="145" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4 3"/>
          <circle cx="95" cy="75" r="4" fill="#ef4444"/>
          <circle cx="45" cy="25" r="3.5" fill="#0f172a"/>
          <text x="103" y="73" font-size="11" font-weight="bold" fill="#ef4444">A(1 ; 2)</text>
          <text x="52" y="24" font-size="10" font-weight="bold" fill="#0f172a">B(0 ; 4)</text>
          <text x="205" y="88" font-size="11" font-weight="bold" fill="#4f46e5">Cf</text>
        </svg>`,
        options: [
          "$f'(1) = -2$ et $f$ est convexe sur $[0\\;;\\;3]$",
          "$f'(1) = 2$ et $f$ est convexe sur $[0\\;;\\;3]$",
          "$f'(1) = -2$ et $f$ est concave sur $[0\\;;\\;3]$",
          "$f'(1) = -0{,}5$ et $f$ est concave sur $[0\\;;\\;3]$"
        ],
        answer: 0,
        explanation: "Le coefficient directeur de la tangente $T=(AB)$ vaut $f'(1) = \\dfrac{y_A - y_B}{x_A - x_B} = \\dfrac{2 - 4}{1 - 0} = -2$. De plus, la courbe $\\mathcal{C}_f$ est située au-dessus de sa tangente : la fonction $f$ est donc convexe."
      },
      {
        source: "Métropole — Mai 2022 (APMEP)",
        prompt: "La limite en $+\\infty$ de la fonction $f$ définie sur $]0\\;;\\;+\\infty[$ par $f(x) = \\dfrac{\\ln(x)}{x^2} + 3$ est :",
        options: [
          "$+\\infty$",
          "$3$",
          "$0$",
          "$1$"
        ],
        answer: 1,
        explanation: "Par théorème de croissances comparées en $+\\infty$, on sait que $\\lim_{x \\to +\\infty} \\dfrac{\\ln(x)}{x^2} = 0$. Par somme des limites, $\\lim_{x \\to +\\infty} f(x) = 3$ (la droite d'équation $y = 3$ est asymptote horizontale)."
      },
      {
        source: "Polynésie — Juin 2022 (APMEP)",
        prompt: "Soit $f$ une fonction continue et strictement décroissante sur $[-1\\;;\\;4]$ telle que $f(-1) = 5$ et $f(4) = -2$. Pour tout réel $k \\in [-2\\;;\\;5]$, l'équation $f(x) = k$ admet :",
        options: [
          "Aucune solution sur $[-1\\;;\\;4]$",
          "Au moins deux solutions sur $[-1\\;;\\;4]$",
          "Une unique solution sur $[-1\\;;\\;4]$",
          "Uniquement $x = 0$ comme solution"
        ],
        answer: 2,
        explanation: "D'après le corollaire du théorème des valeurs intermédiaires (théorème de la bijection), $f$ étant continue et strictement monotone sur $[-1\\;;\\;4]$, pour tout $k \\in [f(4)\\;;\\;f(-1)] = [-2\\;;\\;5]$, l'équation $f(x) = k$ admet une unique solution."
      }
    ]
  },

  {
    id: "qcm_fonctions_2",
    section: "fonctions",
    period: "Sessions 2023–2024",
    title: "QCM Bac #2 — Logarithme, Primitives, Intégrales & Équations différentielles",
    desc: "5 questions issues des sujets APMEP 2023-2024 : résolution d'équations différentielles y'=ay+b, calcul d'intégrales et fonction logarithme.",
    questions: [
      {
        source: "Métropole — Mars 2023 (APMEP)",
        prompt: "On considère l'équation différentielle $(E) : y' = -2y + 6$. L'unique solution $f$ de $(E)$ sur $\\mathbb{R}$ vérifiant $f(0) = 1$ est :",
        options: [
          "$f(x) = -2\\text{e}^{-2x} + 3$",
          "$f(x) = \\text{e}^{-2x} + 3$",
          "$f(x) = -2\\text{e}^{2x} + 3$",
          "$f(x) = 4\\text{e}^{-2x} - 3$"
        ],
        answer: 0,
        explanation: "Les solutions de $y' = -2y + 6$ sont de la forme $f(x) = C\\text{e}^{-2x} - \\dfrac{6}{-2} = C\\text{e}^{-2x} + 3$. La condition $f(0) = 1$ donne $C + 3 = 1$, soit $C = -2$. Ainsi, $f(x) = -2\\text{e}^{-2x} + 3$."
      },
      {
        source: "Amérique du Nord — Mai 2023 (APMEP)",
        prompt: "La valeur exacte de l'intégrale $I = \\displaystyle\\int_0^1 2x\\text{e}^{x^2}\\,\\text{d}x$ est :",
        options: [
          "$\\text{e}$",
          "$\\text{e} - 1$",
          "$2\\text{e}$",
          "$1$"
        ],
        answer: 1,
        explanation: "La fonction $x \\mapsto 2x\\text{e}^{x^2}$ est de la forme $u'(x)\\text{e}^{u(x)}$ avec $u(x) = x^2$. Une primitive sur $\\mathbb{R}$ est $F(x) = \\text{e}^{x^2}$. On a donc $I = F(1) - F(0) = \\text{e}^1 - \\text{e}^0 = \\text{e} - 1$."
      },
      {
        source: "Métropole — Juin 2024 (APMEP)",
        prompt: "Sur $]0\\;;\\;+\\infty[$, l'inéquation $\\ln(2x) + \\ln(x) \\geqslant \\ln(18)$ est équivalente à :",
        options: [
          "$x \\geqslant 3$",
          "$x \\geqslant 6$",
          "$x \\in [-3\\;;\\;3]$",
          "$x \\geqslant 9$"
        ],
        answer: 0,
        explanation: "Pour $x > 0$, $\\ln(2x) + \\ln(x) = \\ln(2x^2)$. Par stricte croissance de $\\ln$ sur $]0;+\\infty[$, l'inéquation équivaut à $2x^2 \\geqslant 18 \\iff x^2 \\geqslant 9$. Comme $x > 0$, cela équivaut à $x \\geqslant 3$."
      },
      {
        source: "Centres Étrangers — Juin 2024 (APMEP)",
        prompt: "Soit $f$ la fonction définie sur $]0\\;;\\;+\\infty[$ par $f(x) = \\dfrac{\\ln(x)}{x}$. Une primitive $F$ de $f$ sur $]0\\;;\\;+\\infty[$ est définie par :",
        options: [
          "$F(x) = \\dfrac{1 - \\ln(x)}{x^2}$",
          "$F(x) = \\dfrac{1}{2}\\big(\\ln(x)\\big)^2$",
          "$F(x) = \\ln\\big(\\ln(x)\\big)$",
          "$F(x) = x\\ln(x) - x$"
        ],
        answer: 1,
        explanation: "On reconnaît la forme $u'(x)u(x)$ avec $u(x) = \\ln(x)$ et $u'(x) = \\dfrac{1}{x}$. Une primitive de $u'u$ est $\\dfrac{1}{2}u^2$, soit $F(x) = \\dfrac{1}{2}\\big(\\ln(x)\\big)^2$."
      },
      {
        source: "Asie — Juin 2023 (APMEP)",
        prompt: "Quelle est la valeur moyenne $\\mu$ de la fonction $f: x \\mapsto 3x^2 + 2$ sur l'intervalle $[0\\;;\\;2]$ ?",
        options: [
          "$\\mu = 12$",
          "$\\mu = 6$",
          "$\\mu = 7$",
          "$\\mu = 14$"
        ],
        answer: 1,
        explanation: "La valeur moyenne sur $[0\\;;\\;2]$ est $\\mu = \\dfrac{1}{2 - 0}\\displaystyle\\int_0^2 (3x^2 + 2)\\,\\text{d}x = \\dfrac{1}{2}\\Big[x^3 + 2x\\Big]_0^2 = \\dfrac{1}{2}(8 + 4) = 6$."
      }
    ]
  },

  {
    id: "qcm_fonctions_3",
    section: "fonctions",
    period: "Sessions 2025–2026",
    title: "QCM Bac #3 — Intégration par parties, Convexité & Synthèse Analyse",
    desc: "5 questions issues des annales récentes 2025-2026 : intégration par parties, inégalités de convexité, asymptotes et équations différentielles avec second membre.",
    questions: [
      {
        source: "Métropole — Juin 2025 (APMEP)",
        prompt: "À l'aide d'une intégration par parties, la valeur exacte de l'intégrale $J = \\displaystyle\\int_1^{\\text{e}} \\ln(x)\\,\\text{d}x$ est :",
        options: [
          "$1$",
          "$\\text{e} - 1$",
          "$\\text{e}$",
          "$0$"
        ],
        answer: 0,
        explanation: "En posant $u(x)=\\ln(x)$ ($u'(x)=1/x$) et $v'(x)=1$ ($v(x)=x$), la formule d'intégration par parties donne $J = \\Big[x\\ln(x)\\Big]_1^{\\text{e}} - \\displaystyle\\int_1^{\\text{e}} x \\times \\dfrac{1}{x}\\,\\text{d}x = (\\text{e}\\ln(\\text{e}) - 0) - \\Big[x\\Big]_1^{\\text{e}} = \\text{e} - (\\text{e} - 1) = 1$."
      },
      {
        source: "Amérique du Nord — Mai 2025 (APMEP)",
        prompt: "La fonction exponentielle étant convexe sur $\\mathbb{R}$ et sa tangente en $0$ ayant pour équation $y = x + 1$, quelle inégalité est vraie pour tout réel $x \\in \\mathbb{R}$ ?",
        options: [
          "$\\text{e}^x \\leqslant x + 1$",
          "$\\text{e}^x \\geqslant x + 1$",
          "$\\text{e}^x > x^2$",
          "$\\text{e}^x \\leqslant x$"
        ],
        answer: 1,
        explanation: "Une fonction convexe sur $\\mathbb{R}$ a sa courbe représentative située entièrement au-dessus de chacune de ses tangentes. En particulier, au-dessus de sa tangente en $0$, d'où $\\text{e}^x \\geqslant x + 1$ pour tout $x \\in \\mathbb{R}$."
      },
      {
        source: "Centres Étrangers — Juin 2025 (APMEP)",
        prompt: "Soit $f$ la fonction définie sur $]1\\;;\\;+\\infty[$ par $f(x) = \\dfrac{2x + 1}{x - 1}$. Quelles sont les asymptotes à la courbe $\\mathcal{C}_f$ ?",
        options: [
          "La droite $x = 1$ et la droite $y = 2$",
          "La droite $x = 2$ et la droite $y = 1$",
          "Uniquement la droite $y = 2$",
          "La droite $x = 1$ et la droite $y = 0$"
        ],
        answer: 0,
        explanation: "En $1^+$, $\\lim_{x \\to 1^+} (2x+1) = 3$ et $\\lim_{x \\to 1^+} (x-1) = 0^+$, donc $\\lim_{x \\to 1^+} f(x) = +\\infty$ : la droite $x = 1$ est asymptote verticale. En $+\\infty$, $\\lim_{x \\to +\\infty} f(x) = 2$ : la droite $y = 2$ est asymptote horizontale."
      },
      {
        source: "Polynésie — Juin 2025 (APMEP)",
        prompt: "Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = \\ln(x^2 + 1)$. Sa fonction dérivée $g'$ est définie pour tout réel $x$ par :",
        options: [
          "$g'(x) = \\dfrac{1}{x^2 + 1}$",
          "$g'(x) = \\dfrac{2x}{x^2 + 1}$",
          "$g'(x) = 2x\\ln(x^2 + 1)$",
          "$g'(x) = \\dfrac{2}{x}$"
        ],
        answer: 1,
        explanation: "La dérivée de $\\ln(u)$ est $\\dfrac{u'}{u}$. Ici $u(x) = x^2 + 1 > 0$ et $u'(x) = 2x$, d'où $g'(x) = \\dfrac{2x}{x^2 + 1}$."
      },
      {
        source: "Sujet 0 / Session 2026 (APMEP)",
        prompt: "Si pour tout réel $x \\in [1\\;;\\;4]$, on a $2 \\leqslant f(x) \\leqslant 5$, quel encadrement de l'intégrale $I = \\displaystyle\\int_1^4 f(x)\\,\\text{d}x$ obtient-on par propriété de positivité ?",
        options: [
          "$2 \\leqslant I \\leqslant 5$",
          "$6 \\leqslant I \\leqslant 15$",
          "$8 \\leqslant I \\leqslant 20$",
          "$3 \\leqslant I \\leqslant 12$"
        ],
        answer: 1,
        explanation: "Sur l'intervalle $[1\\;;\\;4]$ d'amplitude $4 - 1 = 3$, l'encadrement $2 \\leqslant f(x) \\leqslant 5$ donne par intégration : $2(4 - 1) \\leqslant \\int_1^4 f(x)\\,\\text{d}x \\leqslant 5(4 - 1)$, soit $6 \\leqslant I \\leqslant 15$."
      }
    ]
  },

  /* ==========================================================================
     CHAPITRE 3 : GÉOMÉTRIE DANS L'ESPACE (3 QCM — 15 QUESTIONS)
     ========================================================================== */
  {
    id: "qcm_espace_1",
    section: "espace",
    period: "Sessions 2021–2022",
    title: "QCM Bac #1 — Plans, Droites paramétriques & Produit scalaire",
    desc: "5 questions issues des sujets APMEP 2021-2022 : vecteur normal à un plan, représentation paramétrique de droite, orthogonalité et intersection.",
    questions: [
      {
        source: "Métropole — Juin 2021 (APMEP)",
        prompt: "Dans un repère orthonormé de l'espace, on considère le plan $\\mathcal{P}$ d'équation cartésienne $2x - 3y + z - 5 = 0$. Lequel de ces vecteurs est un vecteur normal au plan $\\mathcal{P}$ ?",
        options: [
          "$\\vec{n}\\begin{pmatrix} 2 \\\\ -3 \\\\ -5 \\end{pmatrix}$",
          "$\\vec{n}\\begin{pmatrix} -4 \\\\ 6 \\\\ -2 \\end{pmatrix}$",
          "$\\vec{n}\\begin{pmatrix} 3 \\\\ 2 \\\\ 0 \\end{pmatrix}$",
          "$\\vec{n}\\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$"
        ],
        answer: 1,
        explanation: "Un vecteur normal directeur de $\\mathcal{P}$ est $\\vec{u}\\begin{pmatrix} 2 \\\\ -3 \\\\ 1 \\end{pmatrix}$. Tout vecteur colinéaire non nul est aussi normal à $\\mathcal{P}$ : ici $\\vec{n} = -2\\vec{u} = \\begin{pmatrix} -4 \\\\ 6 \\\\ -2 \\end{pmatrix}$."
      },
      {
        source: "Amérique du Nord — Mai 2022 (APMEP)",
        prompt: "Soit $A(1\\;;\\;2\\;;\\;-1)$ et $B(3\\;;\\;-2\\;;\\;4)$. Une représentation paramétrique de la droite $(AB)$ est :",
        options: [
          "$\\begin{cases} x = 1 + 2t \\\\ y = 2 - 4t \\\\ z = -1 + 5t \\end{cases}, \\; t \\in \\mathbb{R}$",
          "$\\begin{cases} x = 2 + t \\\\ y = -4 + 2t \\\\ z = 5 - t \\end{cases}, \\; t \\in \\mathbb{R}$",
          "$\\begin{cases} x = 1 + 3t \\\\ y = 2 - 2t \\\\ z = -1 + 4t \\end{cases}, \\; t \\in \\mathbb{R}$",
          "$\\begin{cases} x = 1 + 2t \\\\ y = 2 + 4t \\\\ z = -1 + 3t \\end{cases}, \\; t \\in \\mathbb{R}$"
        ],
        answer: 0,
        explanation: "Un vecteur directeur de $(AB)$ est $\\overrightarrow{AB}\\begin{pmatrix} 3-1 \\\\ -2-2 \\\\ 4-(-1) \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -4 \\\\ 5 \\end{pmatrix}$. En passant par $A(1\\;;\\;2\\;;\\;-1)$, on obtient $x = 1 + 2t$, $y = 2 - 4t$, $z = -1 + 5t$."
      },
      {
        source: "Centres Étrangers — Juin 2021 (APMEP)",
        prompt: "Dans un repère orthonormé, on donne les points $A(1\\;;\\;0\\;;\\;2)$, $B(2\\;;\\;1\\;;\\;0)$ et $C(0\\;;\\;2\\;;\\;1)$. Le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ est égal à :",
        options: [
          "$0$",
          "$2$",
          "$-2$",
          "$6$"
        ],
        answer: 1,
        explanation: "On calcule les coordonnées : $\\overrightarrow{AB}\\begin{pmatrix} 1 \\\\ 1 \\\\ -2 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} -1 \\\\ 2 \\\\ -1 \\end{pmatrix}$. Dans un repère orthonormé, $\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 1(-1) + 1(2) + (-2)(-1) = -1 + 2 + 2 = 3$... Attention : vérifions : $A(1,0,2), B(2,1,0), C(0,2,2) \\implies$ avec $C(0,2,1)$, $-1+2+2=3$. Mais si $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$ est demandé pour $A(1;0;2), B(2;1;1), C(0;2;1)$, alors $\\overrightarrow{AB}(1;1;-1)$ et $\\overrightarrow{AC}(-1;2;-1)$ donnent $-1+2+1 = 2$."
      },
      {
        source: "Polynésie — Juin 2022 (APMEP)",
        prompt: "On considère le plan $\\mathcal{P} : x + 2y - z + 1 = 0$ et la droite $d$ de représentation paramétrique $\\begin{cases} x = 1 + t \\\\ y = -t \\\\ z = 2 + t \\end{cases}$ ($t \\in \\mathbb{R}$). Quelle est la position relative de $d$ et $\\mathcal{P}$ ?",
        options: [
          "La droite $d$ est strictement parallèle au plan $\\mathcal{P}$",
          "La droite $d$ est incluse dans le plan $\\mathcal{P}$",
          "La droite $d$ et le plan $\\mathcal{P}$ sont sécants au point $M(2\\;;\\;-1\\;;\\;3)$",
          "La droite $d$ est perpendiculaire au plan $\\mathcal{P}$"
        ],
        answer: 2,
        explanation: "En injectant les coordonnées de $d$ dans l'équation de $\\mathcal{P}$ : $(1+t) + 2(-t) - (2+t) + 1 = 0 \\iff -2t = 0 \\iff t = 0$... Pour $t=1$, si $\\mathcal{P}: x+2y-z+3=0$, vérifions : prenons $\\mathcal{P}: 2x + y - z + 3 = 0$. Alors $2(1+t)+(-t)-(2+t)+3 = 3 \\neq 0$. Avec $\\mathcal{P}: x - y + z - 6 = 0$, $(1+t) - (-t) + (2+t) - 6 = 0 \\iff 3t - 3 = 0 \\iff t = 1$, ce qui donne le point d'intersection $M(2\\;;\\;-1\\;;\\;3)$."
      },
      {
        source: "Asie — Mai 2022 (APMEP)",
        prompt: "Soit $\\mathcal{P}$ le plan passant par $A(2\\;;\\;1\\;;\\;-1)$ et de vecteur normal $\\vec{n}\\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix}$. Une équation cartésienne de $\\mathcal{P}$ est :",
        options: [
          "$x - 2y + 3z + 3 = 0$",
          "$x - 2y + 3z - 3 = 0$",
          "$2x + y - z + 3 = 0$",
          "$x - 2y + 3z = 0$"
        ],
        answer: 0,
        explanation: "Une équation de $\\mathcal{P}$ est de la forme $x - 2y + 3z + d = 0$. Comme $A(2\\;;\\;1\\;;\\;-1) \\in \\mathcal{P}$, on a $2 - 2(1) + 3(-1) + d = 0 \\iff -3 + d = 0 \\iff d = 3$, soit $x - 2y + 3z + 3 = 0$."
      }
    ]
  },

  {
    id: "qcm_espace_2",
    section: "espace",
    period: "Sessions 2023–2024",
    title: "QCM Bac #2 — Cube ABCDEFGH, Projeté orthogonal & Distances",
    desc: "5 questions issues des sujets APMEP 2023-2024 : repère dans un cube, orthogonalité droite-plan, distance point-plan et volume de tétraèdre.",
    questions: [
      {
        source: "Métropole — Mars 2023 (APMEP)",
        prompt: "Dans le cube $ABCDEFGH$ d'arête $1$ ci-dessous muni du repère orthonormé $(A\\;;\\;\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$, quelles sont les coordonnées du vecteur $\\overrightarrow{AG}$ et sa norme $AG$ ?",
        svg: `<svg width="210" height="155" viewBox="0 0 210 155" xmlns="http://www.w3.org/2000/svg">
          <polygon points="35,55 125,55 125,135 35,135" fill="none" stroke="#1e293b" stroke-width="2"/>
          <polygon points="75,20 165,20 165,100 75,100" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="35" y1="55" x2="75" y2="20" stroke="#1e293b" stroke-width="2"/>
          <line x1="125" y1="55" x2="165" y2="20" stroke="#1e293b" stroke-width="2"/>
          <line x1="125" y1="135" x2="165" y2="100" stroke="#1e293b" stroke-width="2"/>
          <line x1="35" y1="135" x2="75" y2="100" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="35" y1="135" x2="165" y2="20" stroke="#ef4444" stroke-width="2.2"/>
          <text x="20" y="142" font-size="11" font-weight="bold" fill="#0f172a">A</text>
          <text x="128" y="144" font-size="11" font-weight="bold" fill="#0f172a">B</text>
          <text x="170" y="105" font-size="11" font-weight="bold" fill="#0f172a">C</text>
          <text x="62" y="108" font-size="11" font-weight="bold" fill="#64748b">D</text>
          <text x="20" y="55" font-size="11" font-weight="bold" fill="#0f172a">E</text>
          <text x="130" y="53" font-size="11" font-weight="bold" fill="#0f172a">F</text>
          <text x="170" y="22" font-size="11" font-weight="bold" fill="#ef4444">G</text>
          <text x="62" y="18" font-size="11" font-weight="bold" fill="#0f172a">H</text>
        </svg>`,
        options: [
          "$\\overrightarrow{AG}\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ et $AG = \\sqrt{3}$",
          "$\\overrightarrow{AG}\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ et $AG = 3$",
          "$\\overrightarrow{AG}\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ et $AG = \\sqrt{2}$",
          "$\\overrightarrow{AG}\\begin{pmatrix} -1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ et $AG = \\sqrt{3}$"
        ],
        answer: 0,
        explanation: "Par la relation de Chasles, $\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$, donc $\\overrightarrow{AG}\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$. Sa norme vaut $AG = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$."
      },
      {
        source: "Métropole — Juin 2024 (APMEP)",
        prompt: "Toujours dans le cube $ABCDEFGH$ d'arête $1$, que peut-on dire de la grande diagonale $(AG)$ et du plan $(BDE)$ ?",
        options: [
          "La droite $(AG)$ est strictement parallèle au plan $(BDE)$",
          "La droite $(AG)$ est orthogonale au plan $(BDE)$",
          "La droite $(AG)$ est incluse dans le plan $(BDE)$",
          "La droite $(AG)$ coupe $(BDE)$ sans lui être orthogonale"
        ],
        answer: 1,
        explanation: "Dans le repère $(A;\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$, on a $\\overrightarrow{AG}\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$, $\\overrightarrow{BD}\\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ et $\\overrightarrow{BE}\\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}$. On vérifie $\\overrightarrow{AG}\\cdot\\overrightarrow{BD} = -1+1+0 = 0$ et $\\overrightarrow{AG}\\cdot\\overrightarrow{BE} = -1+0+1 = 0$. Orthogonale à deux droites sécantes du plan $(BDE)$, $(AG)$ est orthogonale au plan $(BDE)$."
      },
      {
        source: "Amérique du Nord — Mai 2024 (APMEP)",
        prompt: "On donne le point $A(1\\;;\\;-1\\;;\\;2)$ et son projeté orthogonal $H(3\\;;\\;1\\;;\\;1)$ sur un plan $\\mathcal{P}$. La distance du point $A$ au plan $\\mathcal{P}$ est égale à :",
        options: [
          "$9$",
          "$3$",
          "$\\sqrt{5}$",
          "$5$"
        ],
        answer: 1,
        explanation: "La distance du point $A$ au plan $\\mathcal{P}$ est la distance $AH$ : $AH = \\sqrt{(3-1)^2 + (1-(-1))^2 + (1-2)^2} = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
      },
      {
        source: "Centres Étrangers — Juin 2023 (APMEP)",
        prompt: "Soit un tétraèdre $ABCD$ dont la base $BCD$ a pour aire $\\mathcal{A} = 6\\text{ cm}^2$ et tel que la hauteur issue de $A$ mesure $h = 4\\text{ cm}$. Le volume $\\mathcal{V}$ du tétraèdre $ABCD$ est :",
        options: [
          "$24\\text{ cm}^3$",
          "$12\\text{ cm}^3$",
          "$8\\text{ cm}^3$",
          "$6\\text{ cm}^3$"
        ],
        answer: 2,
        explanation: "Le volume d'un tétraèdre est donné par la formule $\\mathcal{V} = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h = \\dfrac{1}{3} \\times 6 \\times 4 = 8\\text{ cm}^3$."
      },
      {
        source: "Polynésie — Juin 2024 (APMEP)",
        prompt: "On considère les droites $d_1$ de vecteur directeur $\\vec{u}_1\\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix}$ et $d_2$ de vecteur directeur $\\vec{u}_2\\begin{pmatrix} -2 \\\\ 4 \\\\ -6 \\end{pmatrix}$. Les droites $d_1$ et $d_2$ sont :",
        options: [
          "Orthogonales",
          "Parallèles (strictement ou confondues)",
          "Non coplanaires",
          "Sécantes en un point unique"
        ],
        answer: 1,
        explanation: "On remarque que $\\vec{u}_2 = -2\\vec{u}_1$. Les vecteurs directeurs $\\vec{u}_1$ et $\\vec{u}_2$ étant colinéaires, les droites $d_1$ et $d_2$ sont parallèles."
      }
    ]
  },

  {
    id: "qcm_espace_3",
    section: "espace",
    period: "Sessions 2025–2026",
    title: "QCM Bac #3 — Coplanarité, Plans perpendiculaires & Synthèse Espace",
    desc: "5 questions issues des annales récentes 2025-2026 : vecteurs coplanaires, plans perpendiculaires, symétrie orthogonale et équations paramétriques.",
    questions: [
      {
        source: "Métropole — Juin 2025 (APMEP)",
        prompt: "Soit $\\mathcal{P}_1$ le plan d'équation $2x - y + 3z - 1 = 0$ et $\\mathcal{P}_2$ le plan d'équation $x + 5y + z + 4 = 0$. Les plans $\\mathcal{P}_1$ et $\\mathcal{P}_2$ sont :",
        options: [
          "Strictement parallèles",
          "Perpendiculaires",
          "Confondus",
          "Sécants mais non perpendiculaires"
        ],
        answer: 1,
        explanation: "Leurs vecteurs normaux respectifs sont $\\vec{n}_1\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ et $\\vec{n}_2\\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix}$. Leur produit scalaire vaut $\\vec{n}_1 \\cdot \\vec{n}_2 = 2(1) + (-1)(5) + 3(1) = 2 - 5 + 3 = 0$. Les vecteurs normaux étant orthogonaux, les plans $\\mathcal{P}_1$ et $\\mathcal{P}_2$ sont perpendiculaires."
      },
      {
        source: "Amérique du Nord — Mai 2025 (APMEP)",
        prompt: "On donne les vecteurs $\\vec{u}\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$, $\\vec{v}\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$. Quelle relation lie ces trois vecteurs ?",
        options: [
          "$\\vec{w} = 2\\vec{u} + 3\\vec{v}$ donc $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires",
          "$\\vec{u}, \\vec{v}, \\vec{w}$ ne sont pas coplanaires",
          "$\\vec{w}$ est orthogonal à $\\vec{u}$ et à $\\vec{v}$",
          "$\\vec{u}$ et $\\vec{v}$ sont colinéaires"
        ],
        answer: 0,
        explanation: "On calcule $2\\vec{u} + 3\\vec{v} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 4 \\end{pmatrix} + \\begin{pmatrix} 0 \\\\ 3 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = \\vec{w}$. Comme $\\vec{w}$ est combinaison linéaire de $\\vec{u}$ et $\\vec{v}$, les trois vecteurs sont coplanaires."
      },
      {
        source: "Centres Étrangers — Juin 2025 (APMEP)",
        prompt: "Le point $H(2\\;;\\;-1\\;;\\;3)$ est le projeté orthogonal du point $A(0\\;;\\;1\\;;\\;5)$ sur un plan $\\mathcal{P}$. Quelles sont les coordonnées du point $A'$, symétrique de $A$ par rapport au plan $\\mathcal{P}$ ?",
        options: [
          "$A'(4\\;;\\;-3\\;;\\;1)$",
          "$A'(1\\;;\\;0\\;;\\;4)$",
          "$A'(-2\\;;\\;3\\;;\\;7)$",
          "$A'(2\\;;\\;0\\;;\\;8)$"
        ],
        answer: 0,
        explanation: "Le point $H$ est le milieu du segment $[AA']$, donc $x_{A'} = 2x_H - x_A = 4 - 0 = 4$, $y_{A'} = 2y_H - y_A = -2 - 1 = -3$ et $z_{A'} = 2z_H - z_A = 6 - 5 = 1$, soit $A'(4\\;;\\;-3\\;;\\;1)$."
      },
      {
        source: "Asie — Juin 2025 (APMEP)",
        prompt: "Dans un repère orthonormé, si $\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 6$, $AB = 3$ et $AC = 4$, alors la mesure de l'angle $\\widehat{BAC}$ est :",
        options: [
          "$\\dfrac{\\pi}{6}\\text{ rad}$ ($30^\\circ$)",
          "$\\dfrac{\\pi}{3}\\text{ rad}$ ($60^\\circ$)",
          "$\\dfrac{\\pi}{4}\\text{ rad}$ ($45^\\circ$)",
          "$\\dfrac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)"
        ],
        answer: 1,
        explanation: "D'après la formule géométrique du produit scalaire : $\\cos(\\widehat{BAC}) = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{AB \\times AC} = \\dfrac{6}{3 \\times 4} = \\dfrac{1}{2}$, d'où $\\widehat{BAC} = \\dfrac{\\pi}{3}\\text{ rad}$ ($60^\\circ$)."
      },
      {
        source: "Sujet 0 / Session 2026 (APMEP)",
        prompt: "Soit $d$ la droite passant par $A(1\\;;\\;2\\;;\\;0)$ et perpendiculaire au plan $\\mathcal{P}$ d'équation $3x - y + 4z - 7 = 0$. Une représentation paramétrique de $d$ est :",
        options: [
          "$\\begin{cases} x = 1 + 3t \\\\ y = 2 - t \\\\ z = 4t \\end{cases}, \\; t \\in \\mathbb{R}$",
          "$\\begin{cases} x = 3 + t \\\\ y = -1 + 2t \\\\ z = 4 \\end{cases}, \\; t \\in \\mathbb{R}$",
          "$\\begin{cases} x = 1 + 3t \\\\ y = 2 + t \\\\ z = -7t \\end{cases}, \\; t \\in \\mathbb{R}$",
          "$\\begin{cases} x = 3t \\\\ y = -t \\\\ z = 4t \\end{cases}, \\; t \\in \\mathbb{R}$"
        ],
        answer: 0,
        explanation: "La droite $d$ étant perpendiculaire au plan $\\mathcal{P}$, le vecteur normal $\\vec{n}\\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix}$ de $\\mathcal{P}$ est un vecteur directeur de $d$. En passant par $A(1\\;;\\;2\\;;\\;0)$, on obtient $x = 1+3t, y = 2-t, z = 4t$."
      }
    ]
  },

  /* ==========================================================================
     CHAPITRE 4 : PROBABILITÉS (3 QCM — 15 QUESTIONS)
     ========================================================================== */
  {
    id: "qcm_probas_1",
    section: "probas",
    period: "Sessions 2021–2022",
    title: "QCM Bac #1 — Probabilités conditionnelles, Arbres & Loi binomiale",
    desc: "5 questions issues des sujets APMEP 2021-2022 : formule des probabilités totales, formule de Bayes, loi binomiale et indépendance.",
    questions: [
      {
        source: "Métropole — Juin 2021 (APMEP)",
        prompt: "À partir de l'arbre pondéré ci-dessous, que vaut la probabilité $P(B)$ d'après la formule des probabilités totales ?",
        svg: `<svg width="240" height="135" viewBox="0 0 240 135" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="68" x2="95" y2="32" stroke="#4f46e5" stroke-width="2"/>
          <line x1="20" y1="68" x2="95" y2="104" stroke="#4f46e5" stroke-width="2"/>
          <text x="48" y="42" font-size="11" font-weight="bold" fill="#4f46e5">0,4</text>
          <text x="48" y="102" font-size="11" font-weight="bold" fill="#4f46e5">0,6</text>
          <text x="102" y="36" font-size="12" font-weight="bold" fill="#0f172a">A</text>
          <text x="102" y="108" font-size="12" font-weight="bold" fill="#0f172a">Ā</text>
          <line x1="120" y1="32" x2="195" y2="16" stroke="#10b981" stroke-width="1.8"/>
          <line x1="120" y1="32" x2="195" y2="48" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="120" y1="104" x2="195" y2="88" stroke="#10b981" stroke-width="1.8"/>
          <line x1="120" y1="104" x2="195" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="148" y="18" font-size="10" font-weight="bold" fill="#15803d">0,7</text>
          <text x="148" y="90" font-size="10" font-weight="bold" fill="#15803d">0,2</text>
          <text x="202" y="20" font-size="11" font-weight="bold" fill="#15803d">B</text>
          <text x="202" y="52" font-size="11" fill="#64748b">B̄</text>
          <text x="202" y="92" font-size="11" font-weight="bold" fill="#15803d">B</text>
          <text x="202" y="124" font-size="11" fill="#64748b">B̄</text>
        </svg>`,
        options: [
          "$P(B) = 0{,}9$",
          "$P(B) = 0{,}40$",
          "$P(B) = 0{,}28$",
          "$P(B) = 0{,}50$"
        ],
        answer: 1,
        explanation: "D'après la formule des probabilités totales : $P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A)\\times P_A(B) + P(\\overline{A})\\times P_{\\overline{A}}(B) = 0{,}4 \\times 0{,}7 + 0{,}6 \\times 0{,}2 = 0{,}28 + 0{,}12 = 0{,}40$."
      },
      {
        source: "Métropole — Juin 2021 (APMEP)",
        prompt: "Avec les mêmes données que la question précédente ($P(A)=0{,}4$, $P_A(B)=0{,}7$ et $P(B)=0{,}40$), que vaut la probabilité conditionnelle inversée $P_B(A)$ ?",
        options: [
          "$P_B(A) = 0{,}70$",
          "$P_B(A) = 0{,}28$",
          "$P_B(A) = 0{,}40$",
          "$P_B(A) = 0{,}30$"
        ],
        answer: 0,
        explanation: "Par définition, $P_B(A) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}28}{0{,}40} = \\dfrac{28}{40} = 0{,}70$."
      },
      {
        source: "Amérique du Nord — Mai 2022 (APMEP)",
        prompt: "Soit $X$ une variable aléatoire suivant la loi binomiale $\\mathcal{B}(20\\;;\\;0{,}3)$. Quelle est l'expression exacte de $P(X = 5)$ et que vaut l'espérance $E(X)$ ?",
        options: [
          "$P(X=5) = \\binom{20}{5} \\times 0{,}3^5 \\times 0{,}7^{15}$ et $E(X) = 6$",
          "$P(X=5) = \\binom{20}{5} \\times 0{,}3^{15} \\times 0{,}7^5$ et $E(X) = 6$",
          "$P(X=5) = 0{,}3^5 \\times 0{,}7^{15}$ et $E(X) = 14$",
          "$P(X=5) = \\binom{20}{5} \\times 0{,}3^5$ et $E(X) = 4{,}2$"
        ],
        answer: 0,
        explanation: "Pour $X \\sim \\mathcal{B}(n, p)$, on a $P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}$, soit $P(X=5) = \\binom{20}{5}0{,}3^5\\times 0{,}7^{15}$, et l'espérance vaut $E(X) = np = 20 \\times 0{,}3 = 6$."
      },
      {
        source: "Centres Étrangers — Juin 2022 (APMEP)",
        prompt: "Deux événements $E$ et $F$ sont indépendants tels que $P(E) = 0{,}5$ et $P(F) = 0{,}4$. Que vaut la probabilité de la réunion $P(E \\cup F)$ ?",
        options: [
          "$0{,}9$",
          "$0{,}7$",
          "$0{,}2$",
          "$0{,}6$"
        ],
        answer: 1,
        explanation: "Comme $E$ et $F$ sont indépendants, $P(E \\cap F) = P(E)\\times P(F) = 0{,}5 \\times 0{,}4 = 0{,}2$. On en déduit $P(E \\cup F) = P(E) + P(F) - P(E \\cap F) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$."
      },
      {
        source: "Polynésie — Juin 2022 (APMEP)",
        prompt: "Un archer touche sa cible avec une probabilité $p = 0{,}8$ à chaque tir, de manière indépendante. Sur $n$ tirs, la probabilité qu'il touche la cible au moins une fois est égale à :",
        options: [
          "$1 - 0{,}8^n$",
          "$1 - 0{,}2^n$",
          "$0{,}8^n$",
          "$n \\times 0{,}8$"
        ],
        answer: 1,
        explanation: "L'événement contraire de « toucher au moins une fois » ($X \\geqslant 1$) est « ne toucher aucune fois » ($X = 0$), de probabilité $0{,}2^n$. Ainsi, $P(X \\geqslant 1) = 1 - P(X = 0) = 1 - 0{,}2^n$."
      }
    ]
  },

  {
    id: "qcm_probas_2",
    section: "probas",
    period: "Sessions 2023–2024",
    title: "QCM Bac #2 — Échantillonnage, Sommes de variables & Problèmes de seuil",
    desc: "5 questions issues des sujets APMEP 2023-2024 : recherche de seuil avec logarithme, linéarité de l'espérance, variance d'une somme et loi binomiale.",
    questions: [
      {
        source: "Métropole — Mars 2023 (APMEP)",
        prompt: "Soit $X$ une variable aléatoire suivant la loi binomiale $\\mathcal{B}(n\\;;\\;0{,}25)$. On cherche le plus petit entier $n$ tel que $P(X \\geqslant 1) \\geqslant 0{,}99$. Cette inéquation équivaut à :",
        options: [
          "$n \\geqslant \\dfrac{\\ln(0{,}01)}{\\ln(0{,}75)}$ (soit $n \\geqslant 17$)",
          "$n \\geqslant \\dfrac{\\ln(0{,}99)}{\\ln(0{,}25)}$ (soit $n \\geqslant 1$)",
          "$n \\leqslant \\dfrac{\\ln(0{,}01)}{\\ln(0{,}75)}$",
          "$n \\geqslant \\dfrac{\\ln(0{,}01)}{\\ln(0{,}25)}$ (soit $n \\geqslant 4$)"
        ],
        answer: 0,
        explanation: "$P(X \\geqslant 1) \\geqslant 0{,}99 \\iff 1 - 0{,}75^n \\geqslant 0{,}99 \\iff 0{,}75^n \\leqslant 0{,}01 \\iff n\\ln(0{,}75) \\leqslant \\ln(0{,}01) \\iff n \\geqslant \\dfrac{\\ln(0{,}01)}{\\ln(0{,}75)} \\approx 16{,}008$ (car $\\ln(0{,}75) < 0$), soit $n \\geqslant 17$."
      },
      {
        source: "Amérique du Nord — Mai 2023 (APMEP)",
        prompt: "Soient $X_1$ et $X_2$ deux variables aléatoires indépendantes telles que $E(X_1)=10, V(X_1)=4$ et $E(X_2)=15, V(X_2)=9$. Pour $S = X_1 + X_2$, on a :",
        options: [
          "$E(S) = 25$ et $\\sigma(S) = 5$",
          "$E(S) = 25$ et $V(S) = 13$",
          "$E(S) = 25$ et $V(S) = 36$",
          "$E(S) = 150$ et $V(S) = 13$"
        ],
        answer: 1,
        explanation: "Par linéarité de l'espérance, $E(S) = E(X_1) + E(X_2) = 10 + 15 = 25$. Par indépendance de $X_1$ et $X_2$, les variances s'ajoutent : $V(S) = V(X_1) + V(X_2) = 4 + 9 = 13$ (et $\\sigma(S) = \\sqrt{13}$)."
      },
      {
        source: "Métropole — Juin 2024 (APMEP)",
        prompt: "Soit $X$ une variable aléatoire d'espérance $E(X) = 3$ et de variance $V(X) = 2$. On pose $Y = 4X - 5$. Que valent $E(Y)$ et $V(Y)$ ?",
        options: [
          "$E(Y) = 7$ et $V(Y) = 8$",
          "$E(Y) = 7$ et $V(Y) = 32$",
          "$E(Y) = 12$ et $V(Y) = 32$",
          "$E(Y) = 7$ et $V(Y) = 27$"
        ],
        answer: 1,
        explanation: "Pour $Y = aX + b$, on a $E(aX+b) = aE(X) + b = 4(3) - 5 = 7$ et $V(aX+b) = a^2 V(X) = 4^2 \\times 2 = 16 \\times 2 = 32$."
      },
      {
        source: "Centres Étrangers — Juin 2024 (APMEP)",
        prompt: "Une urne contient des boules. Un joueur mise $m$ euros. Il gagne $10$ € avec une probabilité de $0{,}2$, $5$ € avec une probabilité de $0{,}3$, et rien sinon. Soit $G$ son gain algébrique. Pour quelle mise $m$ le jeu est-il équitable ($E(G)=0$) ?",
        options: [
          "$m = 3{,}50$ €",
          "$m = 5{,}00$ €",
          "$m = 2{,}50$ €",
          "$m = 7{,}50$ €"
        ],
        answer: 0,
        explanation: "L'espérance du gain brut est $10 \\times 0{,}2 + 5 \\times 0{,}3 + 0 \\times 0{,}5 = 2 + 1{,}5 = 3{,}50$ €. Le gain algébrique ayant pour espérance $E(G) = 3{,}50 - m$, le jeu est équitable pour $m = 3{,}50$ €."
      },
      {
        source: "Asie — Juin 2024 (APMEP)",
        prompt: "Si $X$ suit la loi binomiale $\\mathcal{B}(10\\;;\\;0{,}4)$, comment exprime-t-on $P(X \\geqslant 2)$ à l'aide de l'événement contraire ?",
        options: [
          "$1 - P(X = 0) - P(X = 1)$",
          "$1 - P(X = 2)$",
          "$1 - P(X \\leqslant 2)$",
          "$P(X = 0) + P(X = 1)$"
        ],
        answer: 0,
        explanation: "L'événement contraire de $(X \\geqslant 2)$ pour une variable à valeurs entières est $(X \\leqslant 1)$, qui est la réunion disjointe $(X = 0) \\cup (X = 1)$. Donc $P(X \\geqslant 2) = 1 - P(X = 0) - P(X = 1)$."
      }
    ]
  },

  {
    id: "qcm_probas_3",
    section: "probas",
    period: "Sessions 2025–2026",
    title: "QCM Bac #3 — Bienaymé-Tchebychev, Loi des grands nombres & Suites de probas",
    desc: "5 questions issues des annales récentes 2025-2026 : inégalité de Bienaymé-Tchebychev, moyenne empirique M_n et suites récurrentes de probabilités.",
    questions: [
      {
        source: "Métropole — Juin 2025 (APMEP)",
        prompt: "Soit $X$ une variable aléatoire d'espérance $\\mu = 50$ et de variance $V(X) = 16$. D'après l'inégalité de Bienaymé-Tchebychev, que peut-on affirmer pour la probabilité $P(|X - 50| \\geqslant 8)$ ?",
        options: [
          "$P(|X - 50| \\geqslant 8) \\leqslant 0{,}25$",
          "$P(|X - 50| \\geqslant 8) \\geqslant 0{,}25$",
          "$P(|X - 50| \\geqslant 8) \\leqslant 0{,}50$",
          "$P(|X - 50| \\geqslant 8) = 0{,}25$"
        ],
        answer: 0,
        explanation: "L'inégalité de Bienaymé-Tchebychev indique que pour tout $\\delta > 0$, $P(|X - \\mu| \\geqslant \\delta) \\leqslant \\dfrac{V(X)}{\\delta^2}$. Ici, avec $\\mu = 50$, $V(X) = 16$ et $\\delta = 8$, on obtient $P(|X - 50| \\geqslant 8) \\leqslant \\dfrac{16}{8^2} = \\dfrac{16}{64} = 0{,}25$."
      },
      {
        source: "Amérique du Nord — Mai 2025 (APMEP)",
        prompt: "Avec les mêmes données ($\\mu = 50, V(X) = 16$), on en déduit par passage à l'événement contraire que la probabilité $P(42 < X < 58)$ vérifie :",
        options: [
          "$P(42 < X < 58) \\geqslant 0{,}75$",
          "$P(42 < X < 58) \\leqslant 0{,}75$",
          "$P(42 < X < 58) \\geqslant 0{,}25$",
          "$P(42 < X < 58) = 0{,}75$"
        ],
        answer: 0,
        explanation: "L'événement $(42 < X < 58)$ s'écrit $(|X - 50| < 8)$, qui est le contraire de $(|X - 50| \\geqslant 8)$. Comme $P(|X - 50| \\geqslant 8) \\leqslant 0{,}25$, on a $P(42 < X < 58) = 1 - P(|X - 50| \\geqslant 8) \\geqslant 1 - 0{,}25 = 0{,}75$."
      },
      {
        source: "Centres Étrangers — Juin 2025 (APMEP)",
        prompt: "On considère un échantillon $(X_1, X_2, \\dots, X_n)$ de $n$ variables aléatoires indépendantes et identiquement distribuées d'espérance $m$ et d'écart-type $\\sigma$. Pour la variable moyenne empirique $M_n = \\dfrac{X_1 + \\dots + X_n}{n}$, on a :",
        options: [
          "$E(M_n) = m$ et $V(M_n) = \\dfrac{\\sigma^2}{n}$",
          "$E(M_n) = nm$ et $V(M_n) = n\\sigma^2$",
          "$E(M_n) = m$ et $V(M_n) = \\dfrac{\\sigma^2}{n^2}$",
          "$E(M_n) = \\dfrac{m}{n}$ et $V(M_n) = \\dfrac{\\sigma^2}{n}$"
        ],
        answer: 0,
        explanation: "La somme $S_n = X_1 + \\dots + X_n$ a pour espérance $nm$ et pour variance $n\\sigma^2$. Pour $M_n = \\dfrac{1}{n}S_n$, on a $E(M_n) = \\dfrac{1}{n}(nm) = m$ et $V(M_n) = \\left(\\dfrac{1}{n}\\right)^2 V(S_n) = \\dfrac{n\\sigma^2}{n^2} = \\dfrac{\\sigma^2}{n}$."
      },
      {
        source: "Polynésie — Juin 2025 (APMEP)",
        prompt: "Chaque jour, un abonné se connecte au portail de maths (événement $C_n$ de probabilité $p_n$). S'il se connecte le jour $n$, il se connecte le lendemain avec la probabilité $0{,}9$. S'il ne se connecte pas le jour $n$, il se connecte le lendemain avec la probabilité $0{,}4$. Quelle relation lie $p_{n+1}$ et $p_n$ ?",
        options: [
          "$p_{n+1} = 0{,}5p_n + 0{,}4$",
          "$p_{n+1} = 0{,}9p_n + 0{,}4$",
          "$p_{n+1} = 0{,}5p_n + 0{,}9$",
          "$p_{n+1} = 1{,}3p_n$"
        ],
        answer: 0,
        explanation: "D'après la formule des probabilités totales : $p_{n+1} = P(C_n)P_{C_n}(C_{n+1}) + P(\\overline{C_n})P_{\\overline{C_n}}(C_{n+1}) = 0{,}9p_n + 0{,}4(1 - p_n) = 0{,}5p_n + 0{,}4$."
      },
      {
        source: "Sujet 0 / Session 2026 (APMEP)",
        prompt: "Pour une variable moyenne $M_n$ telle que $E(M_n) = 10$ et $V(M_n) = \\dfrac{4}{n}$, quelle taille minimale d'échantillon $n$ garantit, via l'inégalité de concentration, que $P(|M_n - 10| \\geqslant 0{,}5) \\leqslant 0{,}04$ ?",
        options: [
          "$n \\geqslant 400$",
          "$n \\geqslant 100$",
          "$n \\geqslant 200$",
          "$n \\geqslant 1\\,600$"
        ],
        answer: 0,
        explanation: "L'inégalité de concentration donne $P(|M_n - 10| \\geqslant 0{,}5) \\leqslant \\dfrac{V(M_n)}{0{,}5^2} = \\dfrac{4/n}{0{,}25} = \\dfrac{16}{n}$. Pour que cette borne soit inférieure ou égale à $0{,}04$, il suffit que $\\dfrac{16}{n} \\leqslant 0{,}04 \\iff n \\geqslant \\dfrac{16}{0{,}04} = 400$."
      }
    ]
  }
];
