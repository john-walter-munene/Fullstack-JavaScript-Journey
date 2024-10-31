// Count non empty entries in my bucket list for hash map.

function countNonEmptyEntries(array) {
    // Base case: If array is not empty or not an array, return 0.
    if (!Array.isArray(array) || array.length === 0) return 0;

    // Base case: If there's only one element in the array, check if its not empty.
    if (array.length === 1) return array[0].length > 0 ? 1 : 0;

    // Divide: split array in two halves.
    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);

    // Conquer: Recursively count non empty entries in each half.
    const leftCount = countNonEmptyEntries(leftHalf);
    const rightCount = countNonEmptyEntries(rightHalf);

    // Combine the sum of counts from both halves.
    return leftCount + rightCount;
}

function  countNonEmptyEntriesTwo(array, start = 0, end = array.length) {
    // Base case: If the array is not an array or is empty, return 0
    if (!Array.isArray(array) || start >= end) return 0;

    // Base case: If there's only one element in the array, check if it's not empty
    if ((end - start) === 1) return array[start].length > 0 ? 1 : 0;

    // Divide: Split array into two halves.
    const mid = Math.floor((start + end) / 2);

    // Conquer: recursively count non-empty entries in each half
    const leftCount = countNonEmptyEntriesTwo(array, start, mid);
    const rightCount = countNonEmptyEntriesTwo(array, mid, end);

    // Combine the sum of these two halves
    return leftCount + rightCount;
}

let testArray = [[0], [], [8], [], [10], [], [], [18]];

console.log(countNonEmptyEntries(testArray));
console.log(countNonEmptyEntriesTwo(testArray));