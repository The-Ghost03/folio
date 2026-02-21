// 1. Mouse Spotlight Effect
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);
});

// 2. Scrollspy (Navigation Update on Scroll)
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

// 3. Bilingual Toggle Logic
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

// 4. "Read More" Toggle Logic
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
