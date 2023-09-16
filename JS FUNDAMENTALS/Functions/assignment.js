function add7(number) {
    return number +=7;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function capitalize(text) {
    let firstLetter = text[0].toUpperCase();
    let otherLetters = text.slice(1).toLowerCase();
    return `${firstLetter}${otherLetters}`;
}
function lastLetter(text) {
    let lastCharacter = text.slice(-1);
    return lastCharacter;
}

lastLetter('Walter')