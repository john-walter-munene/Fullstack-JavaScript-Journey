// Create an array
 let myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

function removeNeg(numbers, callback) {
    const myArray = [];

    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }

    return myArray;
}

console.log(myNumbers);
console.log(posNumbers);

// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);