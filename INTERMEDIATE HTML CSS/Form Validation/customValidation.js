const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I'm expecting an email address!");
    } else {
        email.setCustomValidity('');
    }
});