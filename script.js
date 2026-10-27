document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const revealItems = document.querySelectorAll(".reveal");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const backToTop = document.querySelector("[data-back-to-top]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const navLinks = document.querySelectorAll('.nav-panel a[href^="#"]');
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateScrollUi = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

  header?.classList.toggle("is-scrolled", window.scrollY > 12);
  scrollProgress?.style.setProperty("transform", `scaleX(${Math.min(progress, 1)})`);
  backToTop?.classList.toggle("is-visible", window.scrollY > 420);

  const activeSection = sections
    .slice()
    .reverse()
    .find((section) => section.offsetTop - 180 <= window.scrollY);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", activeSection?.id === link.getAttribute("href").slice(1));
  });
};

updateScrollUi();
window.addEventListener("scroll", updateScrollUi, { passive: true });
window.addEventListener("resize", updateScrollUi);

const setMenuOpen = (isOpen) => {
  menuToggle?.classList.toggle("is-open", isOpen);
  navPanel?.classList.toggle("is-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (menuToggle?.getAttribute("aria-expanded") === "true" &&
      !menuToggle.contains(event.target) && !navPanel.contains(event.target)) {
    setMenuOpen(false);
  }
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
});

if ("IntersectionObserver" in window && !reduceMotion) {
  document.documentElement.classList.add("js-motion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealItems.forEach((item) => observer.observe(item));
}
