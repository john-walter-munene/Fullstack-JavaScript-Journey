// Array Methods.
let myArray = ["I", "study", "JavaScript"];

myArray.splice(2, 0, "complex", "language");
console.log(myArray);

let myArrayTwo = ["I", "study", "JavaScript", "right", "now"];
let removedMembers = myArrayTwo.splice(0, 3, "Let's", "dance");
console.log(removedMembers);
console.log(myArrayTwo);

// Iterate forEach.
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at ${index} in ${array}`);
});

// Searching in an array.
let myArrayThree = myArrayTwo.slice();
console.log(myArrayThree.indexOf("dance"), myArrayThree.includes("now"));

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
]

let user = users.find(item => item.id == 1);
console.log(user.name);

let userIndex = users.findIndex(item => item.id == 1);
console.log(userIndex);
console.log('');

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

// Transform an array.
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let myArrayFour = [1, 2, 20, 15];
console.log(myArrayFour.sort(compareNumeric));

// Split and join!
let names = "John, Walter, Munene, Njeru";
let nameArray = names.split(', ', 2);

for (let name of nameArray) {
    console.log(`A message to ${name}`);
}
console.log(nameArray);
let newName = nameArray.join('-');
console.log(newName);

let myArrayFive = [1, 2, 3, 4, 5];

let result = myArrayFive.reduce((sum, current) => sum + current, 0);
console.log(result);