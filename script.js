const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const revealItems = document.querySelectorAll(".reveal");
const faqItems = document.querySelectorAll(".faq-item");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const backToTop = document.querySelector("[data-back-to-top]");
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

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  navPanel.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.classList.remove("is-open");
    navPanel.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const willOpen = !item.classList.contains("is-open");

    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("is-open");
      faqItem.setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("is-open");
      item.setAttribute("aria-expanded", "true");
    }
  });
});
