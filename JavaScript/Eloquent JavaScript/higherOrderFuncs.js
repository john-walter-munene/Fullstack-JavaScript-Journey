// First approach
let total = 0, count = 1;

while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);

// Second approach
function range(start, end, step) {
    let numbersArray = [];

    // Handle negative step cases
    if (step && step < 0) {
        for (let counter = start; counter >= end; counter += step) numbersArray.push(counter);
        return numbersArray;
    }

    // Handle positive step cases
    if (step) {
        for (let counter = start; counter <= end; counter += step) numbersArray.push(counter);
        return numbersArray;
    }

    for (let counter = start; counter <= end; counter++) numbersArray.push(counter);
    return numbersArray;
}

function sum(array) {
    let sum = 0;
    for (const number of array) sum += number;
    return sum;
}

console.log(sum(range(1, 10)));
console.log('');

// Abstraction.
// Functions that create new functions.
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Functions that change other functions.
function noisy(f) {
    return (...args) => {
        console.log(`Calling with ${args}`);
        let results = f(...args);
        console.log(`Called with ${args}, returned ${results}`);
        return results;
    };
}

noisy(Math.min)(3, 2, 1); // → calling with [3, 2, 1] // → called with [3, 2, 1] , returned 1

// Functions that provide new types of control flow
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => console.log(`${n} is even`));
});

// Internal higher order function.
["A", "B"].forEach(letter => console.log(letter));
console.log('');

// Script data set.
// Filtering arrays: Demonstrating how the filter method works internally
function filter(array, test) {
    let passed = [];

    for (const element of array) {
        if (test(element)) passed.push(element);
    }

    return passed;
}

// console.log(filter(SCRIPTS, script => script.living));

// Transforming with map.
function map(array, transform) {
    let mapped = [];

    for (let element of array) {
        mapped.push(transform(element));
    }

    return mapped;
}

// Summarizing with reduce
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)) // → 10
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // → 10

// Reduce twice...
function characterCont(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }));    // → {name: "Han", …}

// Composability
const SCRIPTS = [];
let biggest = null;

for (let script of SCRIPTS) {
    if (biggest == null || characterCont(biggest) < characterCont(script)) biggest = script;
}

console.log(biggest); // → {name: "Han", …}

function average(array) {
    return array.reduce(((a, b) => (a + b)) / array.length);
}

// console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))); // → 1165
// console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))); // → 204

// Above code as a pipeline.
let totalTwo = 0, countTwo = 0;

for (let script of SCRIPTS) {
    if (script.living) {
        totalTwo += script.year;
        countTwo += 1;
    }
}

console.log(Math.round(total / count)); // → 1165

// Strings andcharactercodes
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121)); // → {name: "Latin", …}
console.log('');

let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]); // → (Invalid half-character)
console.log(horseShoe.charCodeAt(0)); // → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0)); // → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
 
for (let char of roseDragon) {
    console.log(char);
} // → 🌹 // → 🐉
console.log('');

// Recognizingtext
function countBy(items, groupName) {
    let counts = [];
    
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else counts[known].count++;
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5], n => n > 2).length); // → [{name: false, count: 2}, {name: true, count: 3}]

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')); // → 61% Han, 22% Latin, 17% Cyrillic