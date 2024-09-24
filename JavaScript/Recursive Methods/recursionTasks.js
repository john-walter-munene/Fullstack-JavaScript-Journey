function iterationSumToN(number) {
    let count = 0;

    for (let counter = 0; counter <= number; counter++) {
        count += counter;
    }

    return count;
}

// console.log(iterationSumToN(5)); 

function longRecursionSumToN(number) {
    if (number == 1) return 1;
    return number + longRecursionSumToN(number - 1);
}

function recursionSumToN(number) {
    return (number == 1) ? number : (number  + recursionSumToN(number - 1));
}

function arithmeticSumToN(number) {
    return number * (number + 1) / 2;
}

console.log(iterationSumToN(5), recursionSumToN(5), arithmeticSumToN(5));

// Factorial.

function getFactorial(number) {
    return (number != 1) ? number * getFactorial(number - 1) : 1;
}

console.log(getFactorial(5)); // 120

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); // 120

// Fibonacci.

function getFibonacci(number) {
    return (number <= 1) ?  number : getFibonacci(number - 1) + getFibonacci( number - 2);
}

// console.log(getFibonacci(77));

// Output a single-linked list
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function iterationPrintList(list) {
    let templistItems = list;

    while (templistItems) {
        console.log(templistItems.value)
        templistItems = templistItems.next;
    }
}

iterationPrintList(list);

function recursionPrintList(list) {
 console.log(list.value);

 if (list.next) {
    recursionPrintList(list.next);
 }
}

recursionPrintList(list);