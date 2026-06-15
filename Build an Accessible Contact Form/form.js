const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  // stop the page from reloading on submit so the success
  // message can be shown without losing the form state
  e.preventDefault();

  // toggle the class instead of writing inline styles here -
  // form.css handles what "visible" actually looks like
  successMessage.classList.add("is-visible");

  form.reset();
});