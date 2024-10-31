// function hash(name) {
//     return name.charAt(0);
// }

// function hash(name, surname) {
//     return name.charAt(0) + surname.charAt(0);
// }

function stringToNumber(string) {
    let hashCode = 0;

    for (let i = 0; i < string.length; i++) {
        hashCode += string.charCodeAt(i);
    }

    return hashCode;
}

console.log(stringToNumber('bob'));

function hash(name, surname) {
    return stringToNumber(name) + stringToNumber(surname);
}

// Collisions.
function stringToNumber(string) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < string.length; i++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
}

// Minimizing collisions.
