// Translate border-left-width to borderLeftWidth
function camelizeString(string) {
    let newString =  string.split('-');
    let capitalizedArray = newString.map(item => item[0].toUpperCase() + item.slice(1));
    return capitalizedArray.join(''); 
}

console.log(camelizeString('background-color-for-walter'));

// Filter Range...
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4); // 3, 1

function filterRange(array, a, b) {
    return array.filter(item => (a <= item && item <= b ));
}
console.log(filtered);

// Filter range "in place"
function filterRangeInPlace(array, a, b) {
    for (let j = 0; j < array.length; j++) {
        let val = array[j];

        if (val < a || val > b) {
            array.splice(j, 1)
            j--
        }
    }
}

let arrayOne = arr.slice();
filterRangeInPlace(arrayOne, 1, 4);
console.log(arrayOne); 

// Copy and sort array
function copySorted(string) {
    return string.slice().sort();
}

// Create an extendable Calculator.
function Calculator() {

    // create a methods object...
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
    }
    // Define method to calculate expression.
    this.calculate = function (string) {
        // split the string into numbers and operator
        const parts = string.split(' ');

        // extract number and operator.
        let numberOne = +parts[0];
        let operator = parts[1];
        let numberTwo = +parts[2];

        // Calculation based on operator.
        if (!this.methods[operator] || isNaN(numberOne) || isNaN(numberTwo)) {
            return NaN;
        }

        return this.methods[operator](numberOne, numberTwo);
    
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
}
let calc = new Calculator();
console.log(calc.calculate('6 + 7'));

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);

// map to names...
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);
console.table(names);
