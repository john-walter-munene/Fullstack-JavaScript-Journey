// Array methods...
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another, and returns array of removed elements
let removedItems = arr.splice(0, 3, "Let's", "dance");

// Insert elements without removal.
removedItems.splice(2, 0, 'complex', 'language');
console.log(removedItems);

// Negative indexes allowed
removedItems.splice(0, 0, 0, 1, 2);
console.log(removedItems);

// Slice...
let slicedArray = removedItems.slice(3, -1);
let copiedArray = slicedArray.slice();
console.log(copiedArray);

// Concat.
let arrayOne = [1, 2,];

// create an array from: arrOne and [3,4]
let arrayTwo = arrayOne.concat([3, 4,], 5);
console.log(arrayTwo);

let arrayLike = {
    0: "something",
    length: 1,
}

let arrayThree = arrayOne.concat(arrayLike);
console.log(arrayThree[2]);

// Spreadable objects have their values added.
let arrayLikeTwo = {
    ...arrayLike,
    1: "else",
    [Symbol.isConcatSpreadable]: true,
}
console.log(arrayLikeTwo);

let arrayFour = arrayOne.concat(arrayLikeTwo)
console.log(arrayFour);

// Iterate, forEach.
["Bilbo", "Gandalf", "Nazgul"].forEach(item => console.log(item));
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

// Searching in arrays.
let nameArray = ['John', 'Walter', 'Munene', 'Njeru', NaN];

if (nameArray.includes('Munene')) console.log(nameArray.indexOf('Munene')); 

console.log( nameArray.indexOf(NaN) ); // -1 (wrong, should be 0)
console.log( nameArray.includes(NaN) );// true (correct)

// find, findIndex, findLastIndex
let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });

let names = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Walter'},
    {id: 1, name: 'Munene'},
];

let myName = names.find((name, index, array) => (console.log(array[index]), name.id == 1 && index == 2));
console.log(myName.name);
console.clear();

// Filter.
let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers[0], someUsers[1]); // 

// Transform an array.
// Map
let resultTwo = arr.map(function(item, index, array) {
    // Returns the new value instead of the item.
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

let newNamesArray = ['John', 'Walter', 'Munene', 'Njeru',NaN, 'John', 'Walter', 'Munene', 'Njeru', NaN];

let neededNames = newNamesArray.map(function(item, index, array) {
    if (item.length > 4) {
        return 1;
    } else return 0;   
});
console.log(neededNames);
console.clear();

function compare (a, b) {
    return a - b;
}

let arrToSort = [ 1, 2, 15 ];
let sortedArray = arrToSort.slice().sort(compare)
console.log(sortedArray);

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

let namesApp = 'Bilbo, Gandalf, Nazgul';

let arrApp = namesApp.split(', ');

for (let name of arrApp) {
  console.log( `A message to ${name}.` ); // 
}
console.clear();

let arrPlay = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arrPlay.join(';'); // glue the array into a string using ;

console.log( str ); // Bilbo;Gandalf;Nazgul

// Reduce.
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);

console.log(Array.isArray(arrApp))

// Most methods support “thisArg”
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// // ...
// thisArg is the optional last argument

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };

  let usersTwo = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
// find users, for who army.canJoin returns true
let soldiers = usersTwo.filter(army.canJoin, army);

// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23

let soldiersData = usersTwo.filter(user => army.canJoin(user));
console.log(soldiersData.length == soldiers.length);