const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".alert-dismiss").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".alert").classList.add("hidden");
  });
});

document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    const panel = trigger.nextElementSibling;

    trigger.setAttribute("aria-expanded", !isOpen);
    panel.classList.toggle("open", !isOpen);
  });
});