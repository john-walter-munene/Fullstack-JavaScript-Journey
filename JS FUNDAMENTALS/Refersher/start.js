const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.onclick = () => updateBtn();

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine has stopped!"
    }
}

let numberOne = 100;
let numberTwo = 50;
let numberThree = 200;
let numberFour = 120;

let firstAddition = numberOne + numberTwo;
let firstSubtraction = numberThree - numberFour;

let finalResult = firstAddition * firstSubtraction;

let evenOddResult = finalResult % 2;

console.log(finalResult);
console.log(evenOddResult);

let MAX = 57;
let actual = MAX -13;
let percentage = actual / MAX;
console.log(percentage.toFixed(4));