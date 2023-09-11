const birthYear = 1948;
const thisYear = 1965;
const firstName = 'Carlos';
const lastName = 'Stevenson';

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const age = (thisYear - birthYear);

let greeting = `Hello! My name is ${fullName} and I am ${age} years old.`

console.log(greeting);

const caution = (greeting === "Hello! My name is Carlos Stevenson and I am 17 years old.") ? "Correct man." : "Revisit your work";

alert(caution);