const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^[a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/
}

// Validation function.
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
    console.log(regex.test(field.value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        //console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.attributes.name.value]);
    })
})