function sumRangeRecursive(number) {
    if (number <= 1) return 1;
    return number + sumRangeRecursive(number - 1);
}

console.log(sumRangeRecursive(4));

function getPowerRecursive(base, exponent) {
    if (exponent == 0) return 1;
    return base * getPowerRecursive(base, exponent - 1);
}

console.log(getPowerRecursive(2, 3));

function getFactorialRecursive(number) {
    if (number === 1) return 1;

    return number * getFactorialRecursive(number - 1);
}

console.log(getFactorialRecursive(4));

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}

function arrayProductRecursive(array) {
    if (array.length === 0) return 1;
    return array.shift() * arrayProductRecursive(array);
}

console.log(arrayProductRecursive([1, 2, 3]));

// solution to problem #6 in recursive exercises
function contains(object, searchValue) {
    // because `null` has a typof "object", we have to explicitly check
    // to prevent trying to access `null`'s values (which don't exist)
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      // An important problem in the code quiz solution is that `return contains()` will only
      // search the first property of an object, as it will return whatever the result for it is.
      // If our value was nested within the second property, for example, it would never get checked
      // even if the first nested object did not contain it.
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

function parseArrayGetIntegersCount(array) {
    if (array.length == 0) return 0;

    let total = 0;
    let first = array.shift();
    if (Array.isArray(first)) {
        total += parseArrayGetIntegersCount(first);
    } else if (Number.isInteger(first)) total ++;

    return total + parseArrayGetIntegersCount(array);
}

console.log(parseArrayGetIntegersCount([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7)


function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}

function replicateRecursively(count, value) {
    if (count <= 0) return [];
    return [value].concat(replicateRecursively(count - 1, value)); // Removed extra `value`
  }
  
console.log(replicateRecursively(3, 5)); // Output: [5, 5, 5]