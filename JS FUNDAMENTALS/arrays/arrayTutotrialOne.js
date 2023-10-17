let arr = ['I', 'go', 'home'];
delete arr[1];
console.log(arr[1]); // undefined
console.log(arr.length); //3

// array.splic() Super array knife...
let arrTwo = ["I", "study", "JavaScript"];
arrTwo.splice(1, 1); // from index 1 remove 1 element.
console.log(arrTwo);

let arrThree = ["I", "study", "JavaScript", "right", "now"];
arrThree.splice(0, 3, "Let's", "dance");
console.log(arrThree);

let removed = arrThree.splice(0, 2);
console.log(removed);

// Insert elements without removals.
let arrFour =  ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arrFour.splice(2, 0, "complex", "language");
console.log(arrFour);

// Working with negative indexes.
let arrFive = [1, 2, 5];
arrFive.splice(-1, 0, 3, 4,);
console.log(arrFive);

// slice
let arrSix = ["t", "e", "s", "t"];
console.log (arrSix.slice(1, 3)); // ['e', 's']
console.log(arrSix.slice(-2)) // ['s', 't',]

// Copying an array.
let arrSeven = arrSix.slice()
console.log(arrSix)
console.log(arrSeven)