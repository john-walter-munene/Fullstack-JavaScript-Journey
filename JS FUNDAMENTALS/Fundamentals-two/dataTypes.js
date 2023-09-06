// No error

let message = "Hello";
message = 12345;

let number = 12345;
number = 12.345;

// Strings.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Backticks.

let nameOne = "John";

// embed a variable.

alert(`Hello ${nameOne}`); // Hello John

// embed an expression.
alert(`The result is ${1 +2}`);

let nameTwo = "Ilya";

alert( `hello ${1}` ); // hello 1?

alert( `hello ${"nameTwo"}` ); // hello nameTwo ?

alert( `hello ${nameTwo}` ); // hello Ilya ?
