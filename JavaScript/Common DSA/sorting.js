function swapItems(array, firstIndex, secondIndex) {
    let tempOne = array[firstIndex];
    // let tempTwo = array[secondIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = tempOne;
};

var testArray = [7, 9, 4];
swapItems(testArray, 0, 1);

console.log(testArray); // [9, 7, 4];

function indexOfMinimum(array, startIndex = 0) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:
    let minValue = array[startIndex];
    let minIndex = startIndex;

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    for ( let counter = startIndex + 1; counter < array.length; counter++) {
        if (array[counter] < minValue) {
            minValue = array[counter];
            minIndex = counter;
        }
    }

    return minIndex;
}

let testArrayTwo = [18, 6, 66, 44, 9, 22, 14]; 
console.log(indexOfMinimum(testArrayTwo, 2));

function selectionSort(array) {
    var copyArray = array.slice();
    for(let counter = 0; counter < copyArray.length; counter++) {
        let minIndex= indexOfMinimum(copyArray, counter);
        swapItems(copyArray, counter, minIndex);
    }

    return copyArray;
}

console.log(selectionSort(testArrayTwo));