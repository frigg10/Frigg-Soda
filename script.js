// Mobile menu toggle
const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("open") ? "true" : "false"
    );
  });

  // Close menu when a link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Subtle header background on scroll
const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (y > 40) {
      header.style.background = "rgba(10, 10, 11, 0.9)";
    } else {
      header.style.background = "rgba(10, 10, 11, 0.75)";
    }
  },
  { passive: true }
);
