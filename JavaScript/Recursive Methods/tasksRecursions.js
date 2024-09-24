function sumRange(number) {
    if (number == 0) return number;
    return number + sumRange(number - 1);
}

console.log(sumRange(3)); // 6

function power(base, exponent) {
    if (exponent == 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1


function factorial(number) {
    return (number == 1) ? number : number * factorial(number - 1);
}


function productOfArray(array) {
    if (array.length == 0) return 1;
    return array.shift() * productOfArray(array);
}

console.log(productOfArray([1, 2, 3, 10]));