// First working solution for iterative fibonnaci.
function fibonacciIterative(number) {
    const myArray = [0, 1];

    while(myArray.length < number) {

        let lastElement = myArray[myArray.length - 1];
        let secondLastElement = myArray[myArray.length - 2];

        let sumOfLastTwoElements = secondLastElement + lastElement;
        myArray.push(sumOfLastTwoElements);
    };

    return myArray;
}
// Above code works, but for every iteration I check my arrays length
// More overhead
// console.log(fibonacciIterative(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Optimized solution.
function fibonacciIterativeTwo(number) {

    if (number <= 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0, 1];

    const myArray = [0, 1];

    // Iterate up to less two elements as they are predefined.
    for (let counter = 0; counter < number - 2; counter++) {
        let lastElement = myArray[myArray.length - 1];
        let secondLastElement = myArray[myArray.length - 2];

        let sumOfLastTwoElements = secondLastElement + lastElement;
        myArray.push(sumOfLastTwoElements);
    }

    return myArray;
}

// console.log(fibonacciIterativeTwo(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

function fibRec(number) {
    if (number <= 0) return [];          // Return an empty array for non-positive numbers
    if (number === 1) return [0];        // Base case for 1 element
    if (number === 2) return [0, 1];     // Base case for 2 elements

    const myArray = fibRec(number - 1);
    return [...myArray, myArray[myArray.length - 1] + myArray[myArray.length - 2]];
}

console.log(fibRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Best solution...
function fibRecTwo(numbers, fibArray = [0, 1]) {
    if (fibArray.length > numbers) { 
        return fibArray.slice(0, numbers);
    }
    
    // Add the next Fibonacci number to the array
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    
    // Recursively call fibRecTwo with the updated fibArray
    return fibRecTwo(numbers, fibArray);
}

console.log(fibRecTwo(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]

function mergeSort(array, low = 0, high = array.length - 1) {
    if (low < high) {

        // Find middle point.
        let middle = Math.floor((low + high) / 2);

        // Recursive sort both halves.
        mergeSort(array, low, middle);
        mergeSort(array, middle + 1, high);

        // Create copies of the subarrays
        let leftArray = array.slice(low, middle + 1);
        let rightArray = array.slice(middle + 1, high + 1);

        // Merge the arrays
        let i = 0, j = 0, k = low;
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                array[k++] = leftArray[i++];
            } else {
                array[k++] = rightArray[j++];
            }
        }

        // Copy remaining elements of leftArray, if any
        while (i < leftArray.length) {
            array[k++] = leftArray[i++];
        }

         // Copy remaining elements of rightArray, if any
        while (j < rightArray.length) {
            array[k++] = rightArray[j++];
        }
    }

    return array;
}

console.log(mergeSort([100, 3, 2, 1, 13, 8, 5, 0, 1, 98]));