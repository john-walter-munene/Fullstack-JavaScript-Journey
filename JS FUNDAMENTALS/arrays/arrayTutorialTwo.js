// concat.
let arr = [1, 2];
// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arrTwo = arr.slice();
let arrayLike = {
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arrTwo.concat(arrayLike));

// Iterate for each...
console.log('Iterate for each...');
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index) => {
    console.log(`${item} is at index ${index} in the array`);
});
;

// searching in array...
console.log("Searchin in arrays...");
let arrThree = [1, 0, false];
console.log(arrThree.indexOf(0));
console.log(arrThree.includes(1));

let fruits = ['Apple', 'Orange', 'Apple']
console.log(fruits.indexOf('Apple'));
console.log(fruits.lastIndexOf('Apple'));

// include methods handles NaN correctly.
const arrFour = [NaN];
console.log(arrFour.indexOf(NaN)); // -1
console.log(arrFour.includes(NaN)); // true

// find and findIndex/findLastIndex.
// Find objects with specific condition...
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
  ];

let user = users.find(item => item.id == 1);
console.log(`${user.id}. ${user.name}`);

let john = users.findIndex(user => user.name == 'John'); 
console.log(john);
let lastJohn = users.findLastIndex(user => user.name = 'John');
console.log(lastJohn);

// filter.
let usersTwo = users.slice();
let someUsers = usersTwo.filter(item => item.id < 3);
console.log(someUsers);