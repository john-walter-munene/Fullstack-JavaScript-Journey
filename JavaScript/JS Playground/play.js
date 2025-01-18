function alpahbetToIndex(alphabet) {
    const alphas = Array.from(Array(10)).map((e, i) => i + 65);
    const alphabets = alphas.map((x) => String.fromCharCode(x));
    return alphabets.indexOf(alphabet);
}

console.log(alpahbetToIndex('J'));

function arraysEqual(arrayOne, arrayTwo) {
    return arrayOne.every((value, index) => value === arrayTwo[index]);
}

console.log(arraysEqual([0, 0], [0, 0]));