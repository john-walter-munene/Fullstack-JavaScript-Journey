// Creating regular expressions.
let reg = /[a-z]/ig;

const regTwo = new RegExp(/[a-z]/, 'i');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[\w@-]{5,12}$/,
    password: /^[\w@-]{8,20}$/,
    slug: /[a-z\d-]{8,20}/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}

// validation  function.
function validate(namefield, regex) {
    if (regex.test(namefield.value)) {
        namefield.className = "valid";
    } else {
        namefield.className = "invalid";
    }

}

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener("keyup", (event) => {
        // console.log(event.target.attributes.name.value);
        const inputName = event.target.getAttribute('name');
        validate(event.target, patterns[inputName]);
    })
})