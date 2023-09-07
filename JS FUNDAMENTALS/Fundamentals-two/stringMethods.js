let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log(`The length of this text is ${length}.`);

// Extract string parts.

// Using Slice.
let textOne = "Apple, Banana, Kiwi";
let partOne = textOne.slice(-12, -6);
console.log(partOne);

// Using substring.
let str = textOne;
let prt = str.substring(7);
console.log(prt);

// Replacing string content.
let textTwo = "Please visit Microsoft and Microsoft Development Center.";
let newTextTwo = textTwo.replace(/Microsoft/g, "The Odin Project")
console.log(newTextTwo);

// UpperCase and Lowercase.
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);
let text3 = text2.toLowerCase();
console.log(text3);

// String concat

let text4 = "Hello";
let text5 = "World.";
let text6 = text4.concat(" ", text5);
console.log(text6);