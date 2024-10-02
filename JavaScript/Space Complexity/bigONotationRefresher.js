// Constant time.
const tenItems = new Array(10).fill('Item');
const millionItems = new Array(1000000).fill('bar');

function returnFirstElement(array) {
    return array[0];
}

// Both will take the same amount of time.
returnFirstElement(tenItems);
returnFirstElement(millionItems);

function printOnlyFirstFive(array) {
    for ( let i = 0; i < 5; i++) {
        console.log(`Element ${i}: ${array[i]}`);
    }
}

// Both calls below will the take same amount of time.
printOnlyFirstFive(tenItems);
printOnlyFirstFive(millionItems);

// Picking a value from an object via its key is also constant time.
const todaysMenu = {
    breakfast: "Coffee",
    lunch: "Salad",
    dinner: "Ugali",
};

function whatIsInTheMenu(menu, mealType) {
    return menu[mealType];
}

console.log(whatIsInTheMenu(todaysMenu, "breakfast")); // => Coffee

// More constant runtime algos.
function addTen(n) {
    return n + 10
  }
  
console.log(addTen(10)); // => 20
console.log(addTen(1000000)); // => 1000010

function isEvenOrOdd(n) {
    return n % 2 ? 'Odd' : 'Even';
  }
  
  
console.log(isEvenOrOdd(10)); // => Even
console.log(isEvenOrOdd(10001)); // => Odd

// Examples of constant runtime algorthims.
// Select an element from an array with index number.
// Select an element from an object with key value.
// Check if an item on an array is null.

// Inbuilt functions with constant time complexity!!
// Arrays: push(), pop().

// Linear Search O(n)
const tenArray = Array.from(Array(10).keys());

const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return `Found the target: ${target} at index ${i}`;
    }
}
console.log(tenArray);
console.log(linearSearch(tenArray, 5));

// O(log n) - Logarithmic time.
const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = (array.length) - 1;
    
    while (startIndex <= endIndex) {
        let pivot = Math.floor((startIndex + endIndex) / 2);

        if (array[pivot] === target) {
            return `Found the target: ${target} at index ${pivot}`;
        } else if (array[pivot] < target) {
            startIndex = pivot + 1;
        } else {
            endIndex = pivot - 1;
        }
    }

    return false;
}

let beforeLinear = performance.now();
linearSearch(tenArray, 5);
let afterLinear = performance.now();

let beforeBinary = performance.now();
binarySearch(tenArray, 5);
let afterBinary = performance.now();

console.log(`Milliseconds linear search: ${afterLinear - beforeLinear}`); // 0.010199999999997544
console.log(`Milliseconds binary search: ${afterBinary - beforeBinary}`); // 0.081799999999987
// Linear search is approximately faster by 8 times.

// Scaling to a million items.
console.log("Scaling the above algorithms using a large array to note the difference");
const millionArray = Array.from(Array(1000000).keys());
let beforeLinearInLargeArray = performance.now();
linearSearch(millionArray, 567841);
let afterLinearInLargeArray = performance.now();

let beforeBinaryInLargeArray = performance.now();
binarySearch(millionArray, 567841);
let afterBinaryInLargeArray = performance.now();

console.log(`Milliseconds linear search: ${afterLinearInLargeArray - beforeLinearInLargeArray}`); // 2.252999999999986
console.log(`Milliseconds binary search: ${afterBinaryInLargeArray - beforeBinaryInLargeArray}`); // 0.030599999999992633
// Binary search is now approximately 72.5 times faster.

// O(n) Linear time.
const tenItemsLinear = new Array(10).fill('foo')
const hundredItemsLinear = new Array(100).fill('bar')

function printArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('element:', arr[i])
  }
}

printArray(tenItemsLinear)
// this will take 10 times longer than iterating tenItems array:
printArray(hundredItemsLinear)

// Examples of constant runtime algorthims.
// Print all the values in a list.
// Find a given element in a collection.
// Get the maximum or minimum value in an array.

// Inbuilt functions with linear time complexity.
// Arrays: shift(), unshift(), splice(), concat(), slice(), indexOf(), forEach(), map(), filter(), reduce()

// O(n log n) - Linearithmic time.
// Merge sort, Quick sort, Heapsort, Timsort

const someArray = [ 3, 14, 7, 11, 6, 1, 21, 9, 14, 15 ];

// sorting helper:
const merge = (left, right) => {
    let result = [];
  
    while(left.length || right.length) {

        if(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } else if(left.length) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result;
}

// main function
const mergeSort = (arr) =>{
    if(arr.length <= 1) {
        return arr;
    }

    const pivot = arr.length / 2;
    const left = arr.slice(0, pivot);
    const right = arr.slice(pivot, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(someArray));

// O(n^2) - Quadratic time.
const fruits = ["apple", "strawberry", "watermelon"]

function logAllPairs(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} - ${arr[j]}`)
    }
  }
}

logAllPairs(fruits)

/* Output => 
'apple - apple'
'apple - strawberry'
'apple - watermelon'
'strawberry - apple'
'strawberry - strawberry'
'strawberry - watermelon'
'watermelon - apple'
'watermelon - strawberry'
'watermelon - watermelon'
*/

// O(2^n) - Exponential time.
function fibonacciRecursive(num) {
    // exit conditions, return if it is 0 or 1
    if (num === 0) return 0;

    else if (num === 1) return 1;

    // else, call the function recursively
    else return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
  }

fibonacciRecursive(4)
// OUTPUT => 3

// O(n!) - Factorial time.
function getPermutations (arr) {
    if (arr.length <= 2) {
      if (arr.length === 2) return [arr, [arr[1], arr[0]]];
      return arr;
    }

    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          getPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  }
  
const cities = ['Copenhagen','Stockholm', 'Oslo'];
getPermutations(cities).forEach(element => {
    console.log(element);
});;