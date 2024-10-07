let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function getIndexOfPrimeNumber(array, target) {
    let copyArray = array.slice();

    let min = 0;
    let max = copyArray.length - 1;

    while (min <= max) {
        if (max < min ) return - 1;

        let mid = Math.floor(Math.round((min + max) / 2));

        if (copyArray[mid] === target) return mid;

        if (copyArray[mid] < target) {
            min = mid + 1;
        }

        if (copyArray[mid] > target) {
            max = mid - 1;
        }
    }
}

console.log(getIndexOfPrimeNumber(primeNumbers, 67));

function getIndexOfPrimeNumberRecursive(array, target, min = 0, max = array.length - 1) {
    if (min > max) return -1; // Base case: if bounds cross, return -1 (target not found)

    let mid = Math.floor((min + max) / 2); // Calculate mid-point

    if (array[mid] === target) {
        return mid; // Target found, return index
    } else if (array[mid] < target) {
        return getIndexOfPrimeNumberRecursive(array, target, mid + 1, max); // Search in the right half
    } else {
        return getIndexOfPrimeNumberRecursive(array, target, min, mid - 1); // Search in the left half
    }
}

console.log(getIndexOfPrimeNumberRecursive(primeNumbers, 67)); // Outputs: 18
