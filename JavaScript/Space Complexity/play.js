// O(1) Constant complexity.

function multiplay(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

// O(N) Linear complexity.
function sumArray(array) {
    const copyArray = array.slice();
    let sum = 0;
    copyArray.forEach((number) => {
        sum += number;
    });
    return sum;
}

// The complexity is replicated no matter the data structure.
function sumObjectValues(object) {
    const copyObject = { ...object };
    let sum = 0;
    Object.values(copyObject).forEach((value) => {
        sum += value;
    });
    return sum;
}

