// Translate border-left-width to borderLeftWidth

function camelizeString(string) {
    return string.split('-')
            .map(
                (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
            ).join('');
}
console.log(camelizeString('papa-jojo-mlevi'));

// Filter range.
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified.)

// Filter range "IN PLACE"
// Without modifying array...
function filterRangeInPlace(arr, a, b) {
    return arr.filter(item => (a <= item && b >= item) || (b <= item && a >= item));
}
// while modifying existing array...
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
filterRangeInPlace(arr, 1, 4);
console.log(arr);

// Sort in decreasing order...
let arrTwo = [5, 2, 1, -10, 8];
function sortingMachine(a, b) {
    return b - a;
}
console.log(arrTwo);
arrTwo.sort(sortingMachine);
console.log(arrTwo);

// Copy and sort array
console.log("Copy and sort array...")

let arrThree = ['HTML', 'JavaScript', 'CSS'];
let sortedArrThree = copySorted(arrThree);

function copySorted(array) {
  return newarray = [...array].sort();
  }
function copySortedTwo(array) {
  return array.slice().sort();
}
console.log(arrThree);
console.log(sortedArrThree);

// Create an extendable calculator...
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calulator;

calc.calculate("3 + 7");