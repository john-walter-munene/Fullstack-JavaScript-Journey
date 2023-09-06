const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
// alert(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const personName = "Chris";
const greetings = `Hello ${personName}`;
console.log(greetings);

// Joining together two variables.
const one = "Hello, ";
const two = "how are you?"
const joined = `${one} ${two}`;
console.log(joined);

// String concatenation in action.

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

// button.addEventListener("click", greet);

// Including expressions in strings.
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

