const form = document.querySelector("form");
const email = document.getElementById("email");
const errorAreas = document.querySelectorAll(".error");
const errorIcon = document.querySelectorAll(".icon-error");

const inputs = document.querySelectorAll("input");

inputs.forEach((input, i) => {
  input.addEventListener("input", (event) => {
    if (input.validity.valid) {
      removeError(i)
    } else {
      showError(input, i);
    }
  });
});

form.addEventListener("submit", (event) => {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].validity.valid) {
      showError(inputs[i], i);
      event.preventDefault();
    }
  }
});

function removeError(i) {
  errorAreas[i].textContent = "";
  errorIcon[i].style.display = "none";
  inputs[i].classList.remove("invalid-input");
}

function showError(input, i) {
  if (input.validity.valueMissing) {
    errorAreas[i].textContent = `${input.placeholder} cannot be empty`;
  } else if (input.validity.typeMismatch) {
    errorAreas[i].textContent = `Looks like this is not an email`;
  }
  inputs[i].classList.add("invalid-input");
  errorIcon[i].style.display = "block";
}
