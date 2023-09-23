const fruits = ["Banana", "Orange", "Apple", "Mango"];

let availablefruits = fruits.join(', ');
console.log(availablefruits);

fruits.pop();
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

let deletedFruit = fruits.shift();
console.log(deletedFruit);
console.log(fruits);

let newFruit = fruits.unshift("Pawpaw");
console.log(fruits);

// Merging arrays.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);