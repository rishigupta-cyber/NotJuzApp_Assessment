// mobile nav toggle, shared by every page
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// volunteer form on get-involved.html - swap the form for a success message
const volunteerForm = document.querySelector("#volunteerForm");
const volunteerSuccess = document.querySelector("#volunteerSuccess");

if (volunteerForm && volunteerSuccess) {
  volunteerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    volunteerForm.classList.add("is-hidden");
    volunteerSuccess.classList.add("is-visible");
  });
}

// contact form on contact.html - same pattern as the volunteer form
const contactForm = document.querySelector("#contactForm");
const contactSuccess = document.querySelector("#contactSuccess");

if (contactForm && contactSuccess) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.classList.add("is-hidden");
    contactSuccess.classList.add("is-visible");
  });
}