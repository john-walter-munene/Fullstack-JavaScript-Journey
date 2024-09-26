// Big O(1). Constant Complexity
function timesTwo(number) {
    return number * 2;
}

console.log(timesTwo(5)) // 10
console.log(timesTwo(2000)) //4000

function manyTimes(num) {
    let total = 4 * num
    return total * 3
  }

// Big O(n) Linear Complexity.
function reverseArray(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }

    return newArr;
  }

console.log(reverseArray([1, 2, 3])) // [3, 2, 1]
console.log(reverseArray([1, 2, 3, 4, 5, 6])) // [6, 5, 4, 3, 2, 1]

// Big O(n^2) Quadratic Complexity.
function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined;

    let total = 0;

    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j;
      }
    }
    return total
  }

console.log(multiplyAll([1, 2], [5, 6])); //33
console.log(multiplyAll([1, 2, 3, 4], [5, 3, 1, 8])); // 170

// O(log N) Logarithmic algorithm
function logTime(arr) {
    let numberOfLoops = 0;

    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++;
    }

    console.log("Number of loops: ", numberOfLoops);

    return numberOfLoops;
  }

let loopsA = logTime([1]) // 0 loops
let loopsB = logTime([1, 2]) // 1 loop
let loopsC = logTime([1, 2, 3, 4]) // 2 loops
let loopsD = logTime([1, 2, 3, 4, 5, 6, 7, 8]) // 3 loops
let loopsE = logTime(Array(16)) // 4 loops

// Big O(n log(n)) Linearithmic time complexity.
function linearithmic(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 1; j < n; j = j * 2) {
        console.log("Hello")
      }
    }
  }

linearithmic(4);

// Big O(2^n) Exponential time
function fibonacci(num) {
    // Base cases
    if (num === 0) return 0
    else if (num === 1) return 1
    // Recursive part
    return fibonacci(num - 1) + fibonacci(num - 2)
  }

// Big O(n!) Factorial time
function factorial(n) {
    let num = n
    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
      num = n * factorial(n - 1)
    }
    return num
  }