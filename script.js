const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent =
    "Thank you! Your form has been checked successfully.";

  formMessage.className = "mt-3 text-success";
  contactForm.reset();
});
