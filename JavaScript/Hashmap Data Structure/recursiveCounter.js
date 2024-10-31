function countNonEmptyEntries(arr) {
    // Base case: If the array is empty or not an array, return 0
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    // Base case: If there's only one element in the array, check if it's non-empty
    if (arr.length === 1) {
        return arr[0].length > 0 ? 1 : 0;
    }

    // Divide: Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Conquer: Recursively count non-empty entries in each half
    const leftCount = countNonEmptyEntries(leftHalf);
    const rightCount = countNonEmptyEntries(rightHalf);

    // Combine: Return the sum of counts from both halves
    return leftCount + rightCount;
}

// Example usage:
const myArray = [[0], [], [5], [], [7]];
console.log(countNonEmptyEntries(myArray)); // Output: 2
