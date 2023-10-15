function isOdd(number) {
    return number % 2 != 0;
}

function isEven(number) {
    return number % 2 == 0;
  }  

function filter(numbers, fn) {
    let results = [];

    for (const number of numbers) {
        if (fn(number)) {
            results.push(number)
        }
    }
    return results;
}

let numbers = [1, 2, 3, 4, 5, 6, 7,];
console.log(filter(numbers, isEven));

