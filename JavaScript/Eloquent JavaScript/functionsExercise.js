console.log("Exercises for functions...!");

function minimum(numOne, numTwo) {
    if (numOne === numTwo) return 'Equal numbers';
    if (numOne < numTwo) return numOne;
    return numTwo;
}

console.log(minimum(26, 13));

function isEvenRecursive(number) {
    if (number < 0) return isEvenRecursive(0 - number);
    if (number === 0) return true;
    if (number === 1) return false;
    return isEvenRecursive(number - 2);
}

console.log(isEvenRecursive(50));
console.log(isEvenRecursive(75));
console.log(isEvenRecursive(-10));
console.log(isEvenRecursive(-11));

// Bean Counting.
function countBs(string) {
    if (typeof string !== 'string') return;

    let characterOnCheck = 'B';
    let numberOfCapitalBs = 0;

    for (let stringLength = 0; stringLength < string.length; stringLength++) {
        if (string[stringLength] === characterOnCheck) numberOfCapitalBs += 1;
    }

    return numberOfCapitalBs;
}

function countChar(string, characterToBeCounted) {
    if (typeof string !== 'string' || typeof characterToBeCounted !== 'string') return;
    let characterOnCheck = characterToBeCounted;
    let characterCounts = 0;
    for (let stringLength = 0; stringLength < string.length; stringLength++) {
        if (string[stringLength] === characterOnCheck) characterCounts++;
    }
    return characterCounts;
}

console.log(countChar('Munene', 'e'));
console.log(countChar('Munene', 8));