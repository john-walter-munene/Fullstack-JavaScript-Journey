// REGEXP Golf

// car and cat
let testOne = /ca[rt]/;
console.log(testOne.test("I have a cat")); // true
console.log(testOne.test("Momaa")); // false
console.log(testOne.test("Bro's car is a crown")); // true
console.log('');

// pop and prop
let testTwo = /^p(o|ro)p$/;
console.log(testTwo.test("prop")); // true
console.log(testTwo.test('Munene')); // false
console.log(testTwo.test("pop")); // true
console.log('');

// ferret, ferry, and ferrari
let testThree = /ferr(y|et|ari)$/;
console.log(testThree.test("ferret")); // true
console.log(testThree.test('Munene')); // false
console.log(testThree.test("ferry")); // true
console.log(testThree.test('Munene')); // false
console.log(testThree.test("ferrari")); // true
console.log('');

// Any word ending in ious
let testFour = /[a-z]+(ious)$/i;
console.log(testFour.test("Precious")); // true
console.log(testFour.test("Munene")); // false
console.log(testFour.test("Olivious")); // true
let testFourV2 = /[a-z]+ious$/i; // refined
console.log('');

// A whitespace character followed by a period, comma, colon, or semicolon
let testFive = /\s[.,:;]/;
console.log(testFive.test(" :Hello, world!")); // ✅ true 
console.log(testFive.test("NoSpaceHere.")); // ❌ false 
console.log(testFive.test("Hi . How are you?")); // ✅ true
console.log(testFive.test("Semicolon;Test")); // ❌ false
console.log(testFive.test("This ,is a test.")); // ✅ true
console.log('');

// A word longer than six letters
let testSix = /\b[a-zA-Z]{7,}\b/;
let testSixTwo = /\b\w{7,}\b/;
console.log(testSix.test("Short")); // ❌ false (only 5 letters)
console.log(testSix.test("LongerWord")); // ✅ true (10 letters)
console.log(testSix.test("Sixsix")); // ❌ false (only 6 letters)
console.log(testSix.test("Supercalifragilistic")); // ✅ true (way longer than 6)
console.log(testSix.test("This is a test of regex.")); // ❌ false (no word > 6 letters)
console.log(testSix.test("Winning solution!")); // ✅ true ("solution" is 8 letters)
console.log('');

// A word without the letter e (or E)
let testSeven = /\b[^eE\s]+\b/;
console.log(testSeven.test("apple")); // ❌ false (contains "e")
console.log(testSeven.test("HELLO")); // ❌ false (contains "E")
console.log(testSeven.test("dog")); // ✅ true (no "e" or "E")
console.log(testSeven.test("sky")); // ✅ true (no "e" or "E")
console.log(testSeven.test("tree")); // ❌ false (contains "e")
console.log(testSeven.test("Eagle")); // ❌ false (contains "E")
console.log(testSeven.test("big sun")); // ✅ true (both words are valid)
console.log(testSeven.test("Eat apple")); // ❌ false (contains "E" and "e")
console.log('');

// Quotingstyle
let text = "She said, 'Hello there!' and he replied, 'Isn't it a great day?'";
let quoteStylerRegExp = /(^|\W)'(.*?)'(\W|$)/g;
let newText = text.replace(quoteStylerRegExp, '$1"$2"$3');
console.log(newText); // She said, "Hello there!" and he replied, "Isn't it a great day?"

// Numbers again
let numberPattern = /^[+\-]?(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+\-]?\d+)?$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12", "TX"]) {
    if (!numberPattern.test(str)) {
    console.log(`Failed to match '${str}'`);
    }
}

for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", ".", "TX"]) {
    if (numberPattern.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}