// Exercises
//  Thesumofarange
function range(start, end, step) {
    let numbersArray = [];

    // Handle negative step cases
    if (step && step < 0) {
        for (let counter = start; counter >= end; counter += step) numbersArray.push(counter);
        return numbersArray;
    }

    // Handle positive step cases
    if (step) {
        for (let counter = start; counter <= end; counter += step) numbersArray.push(counter);
        return numbersArray;
    }

    for (let counter = start; counter <= end; counter++) numbersArray.push(counter);
    return numbersArray;
}

function sum(array) {
    let sum = 0;
    for (const number of array) sum += number;
    return sum;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2,-1));

let testArray = ['John', 'Walter', 'Munene', 'Njeru'];

// This is useful in more situations.
// This is more faster.
function reverseArray(array) {
    let newArray = [];

    for (let counter = array.length - 1; counter >= 0; counter--) {
        newArray.push(array[counter]);
    }

    return newArray;
}

// This tampers with the original array...
function reverArrayInPlaceTwo(array) {
    for (let counter = array.length - 1; counter >= 0; counter--) {
        array.push(array[counter]);
    }
    return array.slice(array.length / 2, array.length);
}

console.log(`Original: ${testArray}`);
console.log(`Reversed: ${reverseArray(testArray)}`);
console.log('');

console.log(`Original: ${testArray}`);
console.log(`Reversed: ${reverArrayInPlaceTwo(testArray)}`);
console.log('');

console.log(`Original: ${testArray}`);
console.log(`Reversed: ${reverArrayInPlaceTwo(testArray)}`);
console.log('');

// Lists.
function arrayToList(array) {
    let list = {
        value: array[0],
        rest: null,
    };

    for (let counter = 1; counter < array.length; counter++) {
        let currentValue = array[counter];
        let tempObj = list;

        while(tempObj.rest) tempObj = tempObj.rest;

        tempObj.rest = {
            value: currentValue,
            rest: null,
        };
    }

    return list;
}

function listToArray(list) {
    let array = [];
    if (list.value) array.push(list.value);

    let tempObj = list;
    while(tempObj.rest) {
        tempObj = tempObj.rest;
        array.push(tempObj.value);
    }

    return array;
}

let testLinkedList = arrayToList([1, 2, 3]);

console.log(testLinkedList.value);
console.log(testLinkedList.rest.value);
console.log(testLinkedList.rest.rest.value);
console.log('');

let testArrayFromList = listToArray(testLinkedList);
console.log(testArrayFromList);
console.log('');

function prepend(value, list) {
    return {
        value,
        rest: list,
    };
} 

let testAddedList = prepend(9, testLinkedList);
console.log(testAddedList.value);
console.log(testAddedList.rest.value);
console.log(testAddedList.rest.rest.value);
console.log(testAddedList.rest.rest.rest.value);
console.log('');

function nth(list, number) {
    let start = 0;
    if (number === start) return list.value;
    let temp = list;

    while (start <= number) {
        start++;
        temp = temp.rest;
        if (start === number) return temp.value;
    }

    return undefined;
}

function nthRecursive(list, number, counter = 0) {
    if (number === counter) return list.value;
    return nthRecursive(list.rest, number, counter + 1);
}

console.log(nth(testAddedList, 2) === nthRecursive(testAddedList, 2));
console.log(nth(testAddedList, 3) === nthRecursive(testAddedList, 3));
console.log('');

// Deep comparison.
function deepEqual(itemOne, itemTwo) {
    // Compare primitive values and identical references
    if (itemOne === itemTwo) return true;

    // Check if both values are objects and not null
    let isObjectOne = typeof itemOne === 'object' && itemOne !== null;
    let isObjectTwo = typeof itemTwo === 'object' && itemTwo !== null;

    if (isObjectOne && isObjectTwo) {
        // Get object keys
        let keysOne = Object.keys(itemOne);
        let keysTwo = Object.keys(itemTwo);

        // Exit early if key lengths aren't equal
        if (keysOne.length !== keysTwo.length) return false;

        // Explicitly check that both objects have the same keys
        for (let i = 0; i < keysOne.length; i++) {
            if (!keysTwo.includes(keysOne[i])) return false;
        }

        // Explicitly check that values are equal (recursively if needed)
        for (let i = 0; i < keysOne.length; i++) {
            let key = keysOne[i];
            if (!deepEqual(itemOne[key], itemTwo[key])) return false;
        }

        return true; // If all checks pass, objects are equal
    }

    return false; // If one is an object and the other isn't, they're not equal
}

function deepEqual(itemOne, itemTwo) {
    // If values are strictly equal, return true
    if (itemOne === itemTwo) return true;

    // Check if both values are objects and not null`
    if (typeof itemOne !== "object" || itemOne === null || 
        typeof itemTwo !== "object" || itemTwo === null) return false;

    // Get the keys of both objects
    let keysOne = Object.keys(itemOne);
    let keysTwo = Object.keys(itemTwo);

    // If the number of keys is different, objects are not equal
    if (keysOne.length !== keysTwo.length) return false;

    // Compare properties and values
    for (let key of keysOne) {
        // Ensure the second object has the same property
        if (!keysTwo.includes(key)) return false;

        // Recursively check for deep equality
        if (!deepEqual(itemOne[key], itemTwo[key])) return false;
    }

    return true; // If no mismatches were found, objects are equal
}

console.log(deepEqual('papa', 'papa')); // true

console.log(deepEqual(
    {
        papa: 'Simon',
        mama: 'Rose',
        bro: 'Dick',
        siz: 'Joy',
    }, 
    {
        papa: 'Simon',
        mama: 'Rose',
        bro: 'Dick',
        siz: 'Joy',
    },
));