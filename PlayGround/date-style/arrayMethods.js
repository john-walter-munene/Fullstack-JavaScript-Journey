let arr = ["I", "go", "home"];

delete arr[1];

let arrTwo = ["I", "study", "JavaScript"];
arrTwo.splice(1, 1);
console.log(arrTwo);

let arrThree = ["I", "study", "JavaScript", "right", "now"];
arrThree.splice(0, 3, "Let's", "dance");
console.log(arrThree);

let arrFour = ["I", "study", "JavaScript", "right", "now"];
let removed = arrFour.splice(0, 2);
console.log(removed);
console.log(arrFour);

// Inserting elements.
let arrFive = ["I", "study", "JavaScript", "right", "now"];
arrFive.splice(2, 0, "a", "complex", "language");
console.log(arrFive);
console.log(arrFive[2]);

// Negative indices allowed.
let numbersArray = [0, 1, 2, 5];
numbersArray.splice(-1, 0, 3, 4);
console.log(numbersArray);

// Slice method.
let lettersArray =  ["t", "e", "s", "t"];
let newLettersArray = lettersArray.slice(1, 3);
console.log(newLettersArray);
let upToEndLettersArray = lettersArray.slice(-2);
console.log(upToEndLettersArray);

// Copying an array.
let myArray = [0, 1, 2, 3, 4, 5];
let myArrayOne = myArray.slice();
console.log(myArray, "Copied array: ->", myArrayOne);

// Concat.
let myArrayTwo = [1, 2];
console.log(myArrayTwo.concat([3, 4]));
// Objects are added as a whole. 
let myArrayThree = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };

console.log(myArrayThree.concat(arrayLike));

// Iterate forEach.
// ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

// Elaborating on positions in target array.
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

// Searching in an array.
// Index of/lastIndexOf.
let myArrayFour = [1, 0, false];
console.log( myArrayFour.indexOf(0) ); // 1
console.log( myArrayFour.indexOf(false) ); // 2
console.log( myArrayFour.indexOf(null) ); // -1

// includes.
console.log(myArrayFour.includes(1)); // true
console.log(myArrayFour.includes(5)); // false

let fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// Includes handles NaN correctly.
const myArrayFive = [NaN];
console.log(myArrayFive.indexOf(NaN)); // -1, but should be 0;
console.log(myArrayFive.includes(NaN)); // true.

// find and findIndex/findLastIndex
// let result = arr.find(function(item, index, array) {
//     // if true is returned, item is returned and iteration is stopped
//     // for falsy scenario returns undefined
//   });

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
  ];

let user = users.find(item => item.id == 1);
console.log(user);

let rightUser = users.findIndex(item => item.name == 'John'); // 0
console.log(rightUser);

let lastUser = users.findLastIndex(user => user.name == 'John'); // 3
console.log(lastUser);

// Filter.
// let results = arr.filter(function(item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
//   });

let newUsers = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

let someUsers = newUsers.filter(item => item.id < 3);
someUsers.forEach(user => console.log(user.name));

// Transform an array. 
// map.
// let result = arr.map(function(item, index, array) {
//     // returns the new value instead of item
//   });

let names = ["Bilbo", "Gandalf", "Nazgul"];
let nameLengths = names.map(item => item.length);
console.log(nameLengths);

// Sort.
let myArraySeven = [ 1, 2, 15 ];

let sortedMyArraySeven = myArraySeven.sort();
console.log(sortedMyArraySeven); // [1, 15, 2]
//  Items are sorted as strings, accounts for the strange behavior.

function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
  }

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

let myArrayEight = [ 1, 2, 15 ];
console.log(myArrayEight.sort(compareNumeric));

// Knowing which items are being sorted.
// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     console.log( a + " <> " + b );
//     return a - b;
//   });

// Writing shorter functions.
let myArrayNine = [ 1, 2, 15 ];
console.log(myArrayNine.sort(function(a, b) { return a - b }));

// Arrow functions are the best.
let myArrayTen = [100, 900, 600, 800];
console.log(myArrayTen.sort((a, b) => a - b));
console.log(myArrayTen.sort((a, b) => b - a));

// Local compare for strings.
let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

// Reverse.
let myArrayEleven = [1, 2, 3, 4, 5];
console.log(myArrayEleven.reverse());

// Split and join.
let pipoNames = 'Bilbo, Gandalf, Nazgul';
let pipoNamesArray = pipoNames.split(',');
console.log(pipoNames);
console.log(pipoNamesArray);
// Limiting length on using split.
let shortPipoNamesArray = pipoNames.split(',', 2);
console.log(shortPipoNamesArray);

let str = "test";
console.log(str.split('')); // t,e,s,t

// Reduce/ReduceRight.
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);

let arrSix = [1, 2, 3, 4, 5];
let sumArraySix = arrSix.reduce((sum, current) => sum + current, 15);
console.log(sumArraySix);

// Array is Array.
console.log(typeof {}); // object
console.log(typeof []); // object (same)

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// Most methods support “thisArg”
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// // ...
// // thisArg is the optional last argument
// thisArg becomes the this for func.

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };

let recruits = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];

let soldiers = recruits.filter(army.canJoin, army);
soldiers.forEach(soldier => console.log(soldier));

// Alternatively.
let confirmedSoldiers = recruits.filter(recruit => army.canJoin(recruit));
confirmedSoldiers.forEach(soldier => console.log(soldier));

// Every to compare arrays.
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  
console.log( arraysEqual([1, 2], [1, 2])); // true
  