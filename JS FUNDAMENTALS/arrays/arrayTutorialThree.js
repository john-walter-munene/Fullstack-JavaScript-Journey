// Transforming an array.
// Map...
let lengths = ['John', 'Walter', 'Munene'].map(item => item.length);
console.table(lengths);

// sort...
let arr = [1, 2, 15];
console.log(arr.sort());  // 1, 15, 2

function compare(a, b) {
    if (a > b) return 1;
    if (a == b ) return 0;
    if (a < b) return -1;
}

console.log(arr.sort(compare)); // 1, 2, 15
 
// Preceding function can be written shorter...
function compareTwo(a, b) { return a - b};
console.log(arr.sort(compareTwo)); // 1, 2, 15

// arrow functions are the best.
console.log(arr.sort((a, b) => a - b)); // 1, 2, 15


// localeCompare for strings.
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1)); 
console.log(countries.sort((a, b) => a.localeCompare(b)));

// Reverse...
let arrTwo = [1, 2, 3, 4, 5];
console.log(arrTwo.reverse());

// Split and Join...
let myName = "John, Walter, Munene, Njeru";
let myNameArray = myName.split(', ');
for (const name of myNameArray) {
    console.log(`A message to ${name}...`);
}

// limit array length.
let arrThree = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arrThree);

// split into letters.
let str = 'test';
console.log(str.split(''));

// arr.join(glue) : Does the opposite of split.
let myNameArrayTwo = ['John', 'Walter', 'Munene', 'Njeru'];
let myNameString = myNameArrayTwo.join(' ');
console.log(`My name is ${myNameString}`);

