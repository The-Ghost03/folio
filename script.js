// ==========================================
// 1. DATA DES PROJETS (TABLEAUX)
// ==========================================

const personalProjects = [
  {
    title_fr: "Agent IA de Prospection IT (Veille & Recrutement)",
    title_en: "IT Prospecting AI Agent (Watch & Recruitment)",
    link: "https://github.com/The-Ghost03/job_seaker.git",
    img: "https://placehold.co/400x250/1e293b/5eead4?text=Bot+Prospection",
    list_fr: [
      "Intégration de l'API REST JSearch (via RapidAPI) dans n8n pour l'extraction automatisée et le filtrage avancé d'offres d'emploi ciblées (SOC, Réseaux, Système).",
      "Développement de scripts JavaScript (Node.js) pour structurer les données entrantes (parsing JSON) et croiser dynamiquement les exigences des postes avec les compétences du profil candidat.",
    ],
    list_en: [
      "Integration of the JSearch REST API (via RapidAPI) into n8n for automated extraction and advanced filtering of targeted job offers (SOC, Networks, System).",
      "Development of JavaScript (Node.js) scripts to structure incoming data (JSON parsing) and dynamically cross-reference job requirements with candidate profile skills.",
    ],
    techs_fr: ["Automatisation API", "Traitement JSON"],
    techs_en: ["API Automation", "JSON Parsing"],
  },
  {
    title_fr: "Agent IA Softskills",
    title_en: "Softskills AI Agent",
    subtitle_fr: "Automatisation, Orchestration & Conteneurisation",
    subtitle_en: "Automation, Orchestration & Containerization",
    link: "https://bot.softskills.ci/my-typebot-pufubb8",
    img: "https://placehold.co/400x250/1e293b/5eead4?text=Agent+IA+Softskills",
    list_fr: [
      "n8n, intégration d'API REST (RapidAPI, Google Workspace, WhatsApp Business), conception de workflows complexes.",
      "Déploiement et intégration d'IA locales (Ollama, Mistral), ingénierie de prompt pour l'automatisation de tâches.",
      "JavaScript (Node.js) appliqué à l'automatisation des données.",
    ],
    list_en: [
      "n8n, REST API integration (RapidAPI, Google Workspace, WhatsApp Business), design of complex workflows.",
      "Deployment and integration of local AIs (Ollama, Mistral), prompt engineering for task automation.",
      "JavaScript (Node.js) applied to data automation.",
    ],
    techs_fr: ["Docker VPS", "Ollama LLM"],
    techs_en: ["Docker VPS", "Ollama LLM"],
  },
  {
    title_fr: "NetGuard Pro (NIDS Distribué)",
    title_en: "NetGuard Pro (Distributed NIDS)",
    link: "http://161.97.105.109:8000/docs",
    img: "https://placehold.co/400x250/1e293b/5eead4?text=NetGuard+Pro",
    list_fr: [
      "Conception d'un serveur centralisé avec FastAPI et SQLAlchemy (PostgreSQL) pour gérer la communication TCP concurrente et asynchrone entre plusieurs agents.",
      "Développement d'agents de supervision en Python utilisant Scapy pour capturer le trafic et détecter les anomalies réseau en temps réel, telles que les attaques SYN Flood et les scans de ports.",
      "Déploiement de l'infrastructure via des conteneurs Docker, avec intégration d'un tableau de bord web de suivi et d'un système de notification d'alertes automatisé par SMTP.",
    ],
    list_en: [
      "Design of a centralized server using FastAPI and SQLAlchemy (PostgreSQL) to manage concurrent and asynchronous TCP communication between multiple agents.",
      "Development of monitoring agents in Python using Scapy to capture traffic and detect network anomalies in real-time, such as SYN Flood attacks and port scans.",
      "Infrastructure deployment via Docker containers, including a web tracking dashboard and an automated SMTP alert notification system.",
    ],
    techs_fr: ["FastAPI", "Python Scapy"],
    techs_en: ["FastAPI", "Python Scapy"],
  },
];

const agencyProjects = [
  {
    title_fr: "Plateforme SIHIOTS",
    title_en: "SIHIOTS Platform",
    link: "https://www.sihiots.hbc-ci.com/",
    img: "img/sihiots.webp",
    desc_fr:
      "Conception et pilotage de la création d'une plateforme web pour la SIHIOTS, incluant un espace membre sécurisé, une bibliothèque numérique et des parcours de formation. Impact : Diffusion du savoir médical et engagement de la communauté scientifique.",
    desc_en:
      "Design and management of the creation of a web platform for SIHIOTS, including a secure member area, a digital library, and training courses. Impact: Dissemination of medical knowledge and scientific community engagement.",
    techs_fr: ["React.js", "Laravel", "Gestion de Projet"],
    techs_en: ["React.js", "Laravel", "Project Management"],
  },
  {
    title_fr: "Site Vitrine JK LOGISTIQUE",
    title_en: "JK LOGISTIQUE Corporate Site",
    link: "https://jklogistique.softskills.ci/",
    img: "img/jklogistique.webp",
    desc_fr:
      "Direction du projet de création d'un site vitrine moderne avec une UX épurée, des formulaires sécurisés et une stratégie SEO pour une visibilité maximale. Point fort : Génération de leads qualifiés via un formulaire de contact performant.",
    desc_en:
      "Managed the creation of a modern showcase website with clean UX, secure forms, and an SEO strategy for maximum visibility. Key point: Qualified lead generation via an efficient contact form.",
    techs_fr: ["UI/UX Design", "SEO", "React.js"],
    techs_en: ["UI/UX Design", "SEO", "React.js"],
  },
  {
    title_fr: "Site Web ONG Hope & Faith (HoFa)",
    title_en: "Hope & Faith (HoFa) NGO Website",
    link: "https://hofa-ci.org/",
    img: "img/hofa.webp",
    desc_fr:
      "Pilotage de la conception d'un site institutionnel avec espace membre, bibliothèque numérique et SEO dynamique pour accroître la portée de l'ONG. Point fort : Amélioration de l'engagement des membres et des donateurs.",
    desc_en:
      "Led the design of a corporate website with a member area, digital library, and dynamic SEO to increase the NGO's reach. Key point: Improved member and donor engagement.",
    techs_fr: ["Gestion de Projet", "Accessibilité", "Laravel", "React.js"],
    techs_en: ["Project Management", "Accessibility", "Laravel", "React.js"],
  },
  {
    title_fr: "Divine Voyage et Tourisme",
    title_en: "Divine Travel and Tourism",
    link: "#",
    img: "img/divine.webp",
    desc_fr:
      "Pilotage du développement d'une plateforme complète de réservation de voyages (vols, hôtels, voitures) avec espace client, blog et back-office de gestion. Objectif : Offrir une expérience de réservation fluide et centralisée.",
    desc_en:
      "Managed the development of a comprehensive travel booking platform (flights, hotels, cars) with customer area, blog, and management back-office. Goal: Provide a seamless and centralized booking experience.",
    techs_fr: ["En cours", "Web Design", "Gestion de Projet", "Business"],
    techs_en: ["In Progress", "Web Design", "Project Management", "Business"],
    isWip: true,
  },
];

// ==========================================
// 2. RENDU DYNAMIQUE DES PROJETS
// ==========================================

function renderProjects() {
  const personalContainer = document.getElementById(
    "personal-projects-container",
  );
  const agencyContainer = document.getElementById("agency-projects-container");

  personalContainer.innerHTML = "";
  agencyContainer.innerHTML = "";

  // --- Générer les projets personnels ---
  personalProjects.forEach((proj) => {
    let listContent = "";

    if (proj.list_fr) {
      const subtitleFr = proj.subtitle_fr
        ? `<p class="mt-1 text-sm font-semibold text-teal-300 mb-2"><span class="lang-fr">${proj.subtitle_fr}</span><span class="lang-en hidden">${proj.subtitle_en}</span></p>`
        : "";

      listContent = `
        ${subtitleFr}
        <ul class="ml-4 list-disc space-y-1 text-sm leading-normal text-slate-400">
          ${proj.list_fr.map((li, i) => `<li><span class="lang-fr">${li}</span><span class="lang-en hidden">${proj.list_en[i]}</span></li>`).join("")}
        </ul>
      `;
    }

    const techTags = proj.techs_fr
      .map(
        (tech, idx) => `
      <li class="mr-1.5 mt-2">
        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
          <span class="lang-fr">${tech}</span>
          <span class="lang-en hidden">${proj.techs_en[idx]}</span>
        </div>
      </li>
    `,
      )
      .join("");

    personalContainer.innerHTML += `
      <li class="mb-12">
        <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div class="z-10 sm:col-span-2">
            <img alt="${proj.title_fr}" loading="lazy" width="200" height="48" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src="${proj.img}" />
          </div>
          <div class="z-10 sm:col-span-6">
            <h3>
              <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="${proj.link}" target="_blank">
                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  <span class="lang-fr">${proj.title_fr}</span>
                  <span class="lang-en hidden">${proj.title_en}</span>
                  <i class="fas fa-arrow-right ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"></i>
                </span>
              </a>
            </h3>
            ${listContent}
            <ul class="mt-4 flex flex-wrap" aria-label="Technologies">
              ${techTags}
            </ul>
          </div>
        </div>
      </li>
    `;
  });

  // --- Générer les projets Agence ---
  agencyProjects.forEach((proj) => {
    // Structure de tags pillule en bas
    const techTags = proj.techs_fr
      .map(
        (tech, idx) => `
      <span class="bg-teal-900/30 text-teal-300 text-xs font-semibold mr-2 mb-2 px-3 py-1.5 rounded-full">
        <span class="lang-fr">${tech}</span>
        <span class="lang-en hidden">${proj.techs_en[idx]}</span>
      </span>
    `,
      )
      .join("");

    agencyContainer.innerHTML += `
      <div class="group relative flex flex-col sm:flex-row gap-6 p-5 md:p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 shadow-lg hover:shadow-teal-900/10">
        
        <div class="sm:w-1/3 shrink-0 flex items-center">
          <img class="w-full h-auto max-h-48 object-cover rounded-lg border border-slate-700/50 opacity-90 group-hover:opacity-100 transition-opacity" src="${proj.img}" alt="${proj.title_fr}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1e293b/5eead4?text=Projet';" />
        </div>
        
        <div class="flex flex-col flex-grow justify-center">
          <h3 class="text-xl font-bold mb-3 text-teal-400 group-hover:text-teal-300 transition-colors flex items-center gap-2">
            <a href="${proj.link}" target="${proj.isWip ? "_self" : "_blank"}" class="absolute inset-0 z-10 ${proj.isWip ? "cursor-not-allowed" : ""}"></a>
            <span class="lang-fr">${proj.title_fr}</span>
            <span class="lang-en hidden">${proj.title_en}</span>
            <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
          </h3>
          
          <p class="text-slate-400 text-sm leading-relaxed mb-5">
            <span class="lang-fr">${proj.desc_fr}</span>
            <span class="lang-en hidden">${proj.desc_en}</span>
          </p>
          
          <div class="flex flex-wrap gap-y-2 relative z-20">
            ${techTags}
          </div>
        </div>
      </div>
    `;
  });
}

renderProjects();

// ==========================================
// 3. EFFETS VISUELS & LOGIQUE
// ==========================================

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateMenu() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
  activateMenu();
});

let currentLang = "fr";
function setLanguage(lang) {
  currentLang = lang;
  const frElements = document.querySelectorAll(".lang-fr");
  const enElements = document.querySelectorAll(".lang-en");

  const btnFr = document.getElementById("btn-fr");
  const btnEn = document.getElementById("btn-en");

  if (lang === "fr") {
    frElements.forEach((el) => el.classList.remove("hidden"));
    enElements.forEach((el) => el.classList.add("hidden"));

    btnFr.classList.add("text-teal-300");
    btnFr.classList.remove("text-slate-400");
    btnEn.classList.add("text-slate-400");
    btnEn.classList.remove("text-teal-300");
  } else {
    frElements.forEach((el) => el.classList.add("hidden"));
    enElements.forEach((el) => el.classList.remove("hidden"));

    btnEn.classList.add("text-teal-300");
    btnEn.classList.remove("text-slate-400");
    btnFr.classList.add("text-slate-400");
    btnFr.classList.remove("text-teal-300");
  }
}

document
  .getElementById("btn-fr")
  .addEventListener("click", () => setLanguage("fr"));
document
  .getElementById("btn-en")
  .addEventListener("click", () => setLanguage("en"));

const readMoreBtn = document.getElementById("read-more-btn");
const aboutMore = document.getElementById("about-more");
const readMoreIcon = document.getElementById("read-more-icon");
let isExpanded = false;

readMoreBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;
  if (isExpanded) {
    aboutMore.classList.remove("hidden");
    readMoreIcon.classList.add("rotate-180");
    readMoreBtn.querySelector(".lang-fr.text-toggle").textContent =
      "Lire moins";
    readMoreBtn.querySelector(".lang-en.text-toggle").textContent = "Read less";
  } else {
    aboutMore.classList.add("hidden");
    readMoreIcon.classList.remove("rotate-180");
    readMoreBtn.querySelector(".lang-fr.text-toggle").textContent = "Lire plus";
    readMoreBtn.querySelector(".lang-en.text-toggle").textContent = "Read more";
  }
});
