const square = function(x) {
    return x * x;
};

console.log(square(12));

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
};

console.log(power(2, 10));    // → 1024

let x = 10;

if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);    // → 60
}

// y is not visible here
console.log(x + z);    // → 40

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100));    // → 50
console.log(n);    // → 10

// Nested scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }

        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(3);

function powerRecursive(base, exponent) {
    if (exponent == 0) return 1; 
    else    return base * power(base, exponent- 1);
}

console.log(powerRecursive(2, 3));    // → 8

// Recursion.
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    
    return find(1, "1");
}

console.log(findSolution(24));    // → (((1 * 3) + 5) * 3)

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }

    console.log(`${cowString} Cows`);
    
    let chickenString = String(chickens);
    
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }

    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);
console.log('');

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }

    console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
console.log('');

function zeroPad(number, width = 3) {
    let string = String(number);

    while (string.length < width) {
        string = "0" + string;
    }

    return string;
}
function printFarmInventoryNew(cows, chickens, pigs) {
    console.log(`${zeroPad(cows)} Cows`);
    console.log(`${zeroPad(chickens)} Chickens`);
    console.log(`${zeroPad(pigs)} Pigs`);
}

printFarmInventoryNew(7, 16, 3)
console.log('');