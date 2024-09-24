function sumToNumberRecursive(number) {
    return (number == 1) ? number : number + sumToNumberRecursive(number - 1);
}

function sumToNumberIterative(number) {
    let sum = 0;

    for( let counter = 0; counter <= number; counter++) {
        sum += counter;
    }

    return sum;
}

function sumToNumberArithmetic(number) {
    return number * (number + 1) / 2;
}

console.log(sumToNumberRecursive(100)); // 5050
console.log(sumToNumberIterative(100)); // 5050
console.log(sumToNumberArithmetic(100)); //5050

function factorialRecursive(number) {
    return (number == 1) ? number : number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(5)); // 120

function fibonacciRecursive(number) {
    return (number <= 1) ? number : fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log(fibonacciRecursive(7));

// Fibonacci algo, as computations above grow faster than (number) terms...
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

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

function printListIterative(list) {
    let temp = list;

    while(temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

// printListIterative(list);

function printListRecursive(listItem) {
    console.log(listItem.value);
    if(listItem.next) printListRecursive(listItem.next);
}

// printListRecursive(list);

function printReverseListIterative(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
printReverseListIterative(list);

function printReverseListRecursive(list) {

    if (list.next) {
      printReverseListRecursive(list.next);
    }
  
    console.log(list.value);
  }
  
printReverseListRecursive(list);