function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr); // [30, 50, 84]

// From arguments to an array.
function sortRestArgs(...theArgs) {
    const sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7
  
function sortArguments() {
    const sortedArgs = arguments.sort();
    return sortedArgs; // this will never happen
  }
  
console.log(sortArguments(5, 3, 7, 1));
// throws a TypeError (arguments.sort is not a function)

function sortArguments(...arguments) {
    const sortedArgs = arguments.sort();
    return sortedArgs;
  }

console.log(sortArguments(5, 3, 7, 1)); // Now works.

  