// Flattening arrays.
let arrayWithArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function flatenArray(array) {
    if (!Array.isArray(array)) return;

    return array.reduce((accumulator, current) => accumulator.concat(current), []);
}

console.log(flatenArray(arrayWithArrays));
console.log('');

//  Yourownloop
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}

function every(array, predicateFunction) {
    for (const item of array) if (!predicateFunction(item)) return false;
    return true;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersTwo = [0, 2, 4, 6, 8, 10];
console.log(every(numbers, (item) => item % 2 == 0));
console.log(every(numbersTwo, (item) => item % 2 == 0));
console.log('');

function everyTwo(array, predicateFunction) {
    return !array.some(item => !predicateFunction(item));
}

console.log(everyTwo(numbers, (item) => item % 2 == 0));
console.log(everyTwo(numbersTwo, (item) => item % 2 == 0));