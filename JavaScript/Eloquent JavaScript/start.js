let ten = 10;

console.log(ten * ten);

let mood = 'light';
console.log(mood);

mood = 'dark';
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log("Luigi's debt: ", luigisDebt);

let bindingWithoutValue;
console.log(bindingWithoutValue);

// Multiple bindings in one let.
let one = 1, two = 2;
console.log(one + two);

// Var and const.
var name = 'Walter';
const greeting = 'Hello ';
console.log(greeting + name); // Hello Walter

// A program to creat 2 ^ 10
let results = 1;
let counter = 0;

while (counter < 10) {
    results = results * 2;
    counter++;
}

console.log(results);

// do while.
let yourName;

do {
    yourName = prompt("Who are you?");
} while (!yourName);
