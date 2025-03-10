// Array methods.

// Splice.
// arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr);

// Remove and replace elements.
let arrOne = ["I", "study", "JavaScript", "right", "now"];
let removedElements = arrOne.splice(0, 3, "Let's", "dance");
console.log(removedElements); // ['I', 'study', 'JavaScript']
console.log(arrOne); // ["Let's", 'dance', 'right', 'now']

// Insertion without deleting
let arrTwo = ["I", "study", "JavaScript"];
arrTwo.splice(2, 0, "complex", "language");
console.log(arrTwo);

// Negative indices are allowed.
let arrThree = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arrThree.splice(-1, 0, 3, 4)
console.log(arrThree);

// Slice.
// arr.slice([start], [end])
let arrFour = ["t", "e", "s", "t"];
let testSlice = arrFour.slice(1, 3);
console.log(arrFour);
console.log(testSlice);

// Copying an entire array.
let copiedArrayFour = arrFour.slice();
console.log(copiedArrayFour);

// Concat.
let arrFive = [1, 2];
let addedArrayFive = arrFive.concat([3, 4], [5, 6], 7, 8, 'array from test');
console.log(addedArrayFive);

// Objects get added as a whole.
let arrayLike = {
    0: "something",
    length: 1
  };

let strongArray = arrFive.concat(arrayLike)
console.log(strongArray);

// Spreadable objects are treated as arrays:
let superArrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };

let superStrongArray = arrFive.concat(superArrayLike);
console.log(superStrongArray);

// Iterate: forEach.
arr.forEach(function(item, index, array) {
    // ... do something with an item
  });

// for each console.log();
["Bilbo", "Gandalf", "Nazgul"].forEach(member => console.log(member));

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item}, is at index ${index} in ${array}`);
})

// Searching in an array.
let arrSix = [1, 0, false];
console.log(arrSix.indexOf(false)); // 2
console.log(arrSix.indexOf(undefined)); // -1 (Not found)...

let fruits = ['Apple', 'Orange', 'Apple']
console.log(fruits.includes("Apple"));
console.log(fruits.lastIndexOf("Apple"));

// includes handles NaN correctly.
let arrSeven = [NaN];
console.log(arrSeven.indexOf(NaN)) // -1 (wrong, should be 0)
console.log(arrSeven.includes(NaN)); // true.

// find and findIndex/findLastIndex
// let result = arr.find(function(item, index, array) {
//     // if true is returned, item is returned and iteration is stopped
//     // for falsy scenario returns undefined
//   });

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

let user = users.find(item => item.id == 1);
console.log(user); // {id: 1, name: 'John'}
 
let newUsers =  [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];

// Find the index of the first John
console.log(newUsers.findIndex(item => item.name == 'John')) // 0
console.log(newUsers.findLastIndex(item => (item.name =='John'))); // 3

// filter
let someUsers = newUsers.filter(item => item.id < 3);
someUsers.forEach(memmber => console.log(memmber));

// Transform an array.
// map
// let result = arr.map(function(item, index, array) {
//     // returns the new value instead of item
//   });

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

let bookReaders = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"}
      ];

let bookReadersIds = bookReaders.map(reader => reader.id * 2);
console.log(bookReadersIds);

// Sort
let arrEight = [ 1, 2, 15 ];
console.log(arrEight.sort());

function compareNumeric(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
  }

let sortedArray = arrEight.sort(compareNumeric);
console.log(sortedArray);

// How the sorting happens
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log( a + " <> " + b );
    return a - b;
  });

console.log([ 1, 2, 15 ].sort((a, b) => a - b));

// use localeCompare for strings.
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort( (a, b) => a - b));
console.log(countries.sort( (a, b) => a.localeCompare(b)));

// reverse.
let arrNine = [1, 2, 3, 4, 5];
let reverseArrNine = arrNine.reverse();
console.log(arrNine);
console.log(reverseArrNine);

// split and join.
// arr.split(delim)
let names = 'Bilbo, Gandalf, Nazgul';
let namesArray = names.split(', ');
console.log(namesArray);

for (let name of namesArray) console.log(`A message to ${name}.`);

// second optional argument to limit array length.
let limitedNames = names.split(', ', 2);
console.log(limitedNames);
let str = "test";
stringArray = str.split('');
console.log(stringArray);

// join
// arr.join(glue)
let mynamesArray = ['John', 'Walter', 'Munene', 'Njeru'];
let mynamesString = mynamesArray.join(', ');
console.log(mynamesArray);
console.log(mynamesString);

// reduce/reduceRight
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);

let numbersArray = [1, 2, 3, 4, 5];
let sumOfNumbers = numbersArray.reduce((sum, current) => sum + current, 0);
console.log(sumOfNumbers);

// Array.isArray
console.log(typeof {}); // Object
console.log(typeof []); // Object

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// Most methods support “thisArg”
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// // ...
// // thisArg is the optional last argument

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };

let usersN = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
soldiers.forEach(soldier => console.log(soldier));

let otherSoldiers = users.filter( user => army.canJoin(user));
otherSoldiers.forEach(soldier => console.log(soldier));

// Comparing two arrays.
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}