const email = document.getElementById("mail");

email.addEventListener('input', (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I'm expecting an email address!")
    } else if (email.validity.tooShort) {
        email.setCustomValidity(`Email should be at least ${email.minLength} characters. You entered ${email.ariaValueMax.length}.`)
    } else email.setCustomValidity("");
})