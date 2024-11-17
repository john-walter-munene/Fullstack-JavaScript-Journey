function camelize(str) {
    if (typeof str !== 'string' || str === '') return ''; // Return empty string if input is invalid
    let strArray = str.split('-');
    return strArray
        .shift() // Remove the first word and keep it lowercase
        .concat(
            strArray
                .map(element => element.charAt(0).toUpperCase() + element.slice(1)) // Capitalize first letter of each subsequent word
                .join('') // Join the words back together
        );
}

console.log(camelize('background-color')); // backgroundColor
console.log(camelize('list-style-image')); // listStyleImage
console.log(camelize('')); // ""
console.log(camelize(123)); // ""
console.log(camelize('-webkit-transition')); // WebkitTransition

function filterRange(array, lowerLimit, higherLimit) {
    if (!Array.isArray(array)) return;
    return array.filter((element) => (element >= lowerLimit && element <= higherLimit) )
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
filtered.forEach(element => {
    console.log(element);
});