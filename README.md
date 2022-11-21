# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [here](https://your-solution-url.com)
- Live Site URL: [here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Constraint Validation API
### What I learned

The validation on this one was kind of troublesome, it took a lot of time and help to find out the problems i was facing, in the and it was just some Ifs made wrong and a missing attribute of the form element. About the CSS and HTML, nothing new, just some basic stuff, the only challenge was the validation itself.

My Beautiful form 
```html
<form novalidate>
            <label for="first-name">
              <input
                type="text"
                name="first name"
                id="first-name"
                placeholder="First Name"
                required
              />
              <img src="./images/icon-error.svg" alt="/" class="icon-error">
              <span class="error" aria-live="polite"></span>
            </label>
  
            <label for="last-name">
              <input
                type="text"
                name="last name"
                id="last-name"
                placeholder="Last Name"
                required
              />
              <img src="./images/icon-error.svg" alt="/" class="icon-error">
              <span class="error" aria-live="polite"></span>
            </label>
  
            <label for="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <img src="./images/icon-error.svg" alt="/" class="icon-error">
              <span class="error" aria-live="polite"></span>
            </label>
  
            <label for="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <img src="./images/icon-error.svg" alt="/" class="icon-error">
              <span class="error" aria-live="polite"></span>
            </label>
            <input id="submit-btn" type="submit" value="Claim your free trial" />
  
            <p class="sub-txt">
              By clicking the button, you are agreeing to our
              <strong class="orange-strong">Terms and Services</strong>
            </p>
          </form>
```
And its validation
```js
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
```

### Continued development

Looking foward to a cleaner and more standard way to make de JavaScript part.

### Useful resources

- [MDN Reference for Client side forms validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) - This always helps me with changing the validation from de browser to mine.

## Author

- Frontend Mentor - [@jAllanOli](https://www.frontendmentor.io/profile/jAllanOli)
- gitHub - [@jAllanOli](https://github.com/jAllanOli)