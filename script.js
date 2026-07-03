const whatsappNumber = "5521996929998";
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const revealItems = document.querySelectorAll(".reveal");
const leadForm = document.querySelector("[data-lead-form]");
const ctaVariantButton = document.querySelector("[data-ab-cta]");
const scrollDepths = [25, 50, 75, 100];
const reachedDepths = new Set();

const trackEvent = (eventName, params = {}) => {
  const payload = {
    page_path: window.location.pathname,
    traffic_source: window.location.search || "direct",
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, payload);
  }
};

const storeTrafficSource = () => {
  const params = new URLSearchParams(window.location.search);
  const source = {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };

  if (Object.values(source).some(Boolean)) {
    localStorage.setItem("fastcell_traffic_source", JSON.stringify(source));
  }
};

const setCtaVariant = () => {
  if (!ctaVariantButton) return;

  const variants = ["Comprar pelo WhatsApp", "Solicitar cotação"];
  let variant = localStorage.getItem("fastcell_cta_variant");

  if (variant === "Solicitar cotacao") {
    variant = "Solicitar cotação";
    localStorage.setItem("fastcell_cta_variant", variant);
  }

  if (!variant) {
    variant = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem("fastcell_cta_variant", variant);
  }

  ctaVariantButton.textContent = variant;
  ctaVariantButton.dataset.variant = variant;
};

const toggleMenu = () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  navPanel.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const closeMenu = () => {
  menuToggle.classList.remove("is-open");
  navPanel.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const observeRevealItems = () => {
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

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
};

const handleScrollDepth = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableHeight <= 0) return;

  const currentDepth = Math.round((window.scrollY / scrollableHeight) * 100);
  scrollDepths.forEach((depth) => {
    if (currentDepth >= depth && !reachedDepths.has(depth)) {
      reachedDepths.add(depth);
      trackEvent("scroll_depth", { depth });
    }
  });
};

const handleLeadSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const device = String(formData.get("device") || "").trim();

  const message = [
    "Olá Fast Cell, quero consultar estoque.",
    `Nome: ${name}`,
    `Telefone: ${phone}`,
    `Modelo do aparelho: ${device}`,
  ].join("\n");

  trackEvent("lead_form_submit", { device_model: device });
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
};

storeTrafficSource();
setCtaVariant();
observeRevealItems();

menuToggle.addEventListener("click", toggleMenu);
navPanel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
leadForm.addEventListener("submit", handleLeadSubmit);

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    trackEvent("cta_click", {
      cta_id: element.dataset.track,
      cta_text: element.textContent.trim(),
      cta_variant: element.dataset.variant || null,
    });
  });
});

window.addEventListener("scroll", handleScrollDepth, { passive: true });
window.addEventListener("load", () => trackEvent("landing_loaded"));
