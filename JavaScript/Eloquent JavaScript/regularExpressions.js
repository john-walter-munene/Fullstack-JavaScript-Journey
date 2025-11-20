// Creating a regular expression
let re1 = new RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

// Testing for matches
console.log(/abc/.test("abcde")) // true
console.log(/abc/.test("abxde")); // false

// Sets of characters
console.log(/[0123456789]/.test("in 1992")); // true
console.log(/[0-9]/.test("in 1992")); // true

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // → true
console.log(dateTime.test("30-jan-2003 15:20")); // → false
console.log('');

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110")); // → false
console.log(notBinary.test("1100100010200110")); // → true
console.log('');

// Repeating parts of a pattern
console.log(/'\d+'/.test("'123'")); // → true
console.log(/'\d+'/.test("''")); // → false
console.log(/'\d*'/.test("'123'")); // → true
console.log(/'\d*'/.test("''")); // → true

// Optional parts
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); // → true
console.log(neighbor.test("neighbor")); // → true

let dateTimeTwo = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTimeTwo.test("1-30-2003 8:45")); // → true
console.log('');

// Grouping subexpressions
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); // → true

// Matches and Groups
let match = /\d+/.exec("one two 100");
console.log(match); // (1) ['100', index: 8, input: 'one two 100', groups: undefined]
console.log(match.index); // 8
// console.log("one two 100".match(/\d+/)); // (1) ['100', index: 8, input: 'one two 100', groups: undefined]

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'")); // → ["'hello'", "hello"]

console.log(/bad(ly)?/.exec("bad")); // → ["bad", undefined]
console.log(/(\d)+/.exec("123")); // → ["123", "3"]
console.log('');

// The Date Class
console.log(new Date()); // Thu Feb 20 2025 16:29:27 GMT+0300 (Volgograd Standard Time)
console.log(new Date(2025, 2, 20)); // Thu Mar 20 2025 00:00:00 GMT+0300 (Volgograd Standard Time)
console.log(new Date(2025, 2, 20, 16, 29, 59, 999)); // Thu Mar 20 2025 16:29:59 GMT+0300 (Volgograd Standard Time)
console.log('');

let dateObject = new Date();
console.log(dateObject);
let dateObjectTimeStamp = dateObject.getTime();
console.log(dateObjectTimeStamp);
console.log(new Date(dateObjectTimeStamp));
console.log('');

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);

    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003")); // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
console.log('');

// Word and string boundaries
console.log(/cat/.test("concatenate")); // → true
console.log(/\bcat\b/.test("concatenate")); // → false
console.log('');

// Choice patterns
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));
console.log('');

// The replace method
console.log("papa".replace("p", "m")); // → mapa
console.log("Borobudur".replace(/[ou]/, "a")); // → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a")); // → Barabadar
console.log('');

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));
// → Barbara Liskov
// John McCarthy
// Philip Wadler
console.log('');

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase())); // → the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length- 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne)); // → no lemon, 1 cabbage, and 100 eggs
console.log('');

// Greed
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3")); // → 1 + 3
console.log(stripComments("x = 10;// ten!")); // → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1")); // → 1 1
console.log("");

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 /* a */+/* b */ 1")); // → 1 + 1
console.log('');

// Dynamically creating RegExp objects
// let name = "harry";
// let text = "Harry is a suspicious character.";
// let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
// console.log(text.replace(regexp, "_$1_")); // → _Harry_ is a suspicious character.

let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_")); // → This _dea+hl[]rd_ guy is super annoying.
console.log('');

// The search method
console.log("  word".search(/\S/)); // → 2
console.log("   ".search(/\S/)); // - 1
console.log('');

// Last Index Property
let pattern = /y/g;
pattern.lastIndex = 3;
let matchOne = pattern.exec("xyzzy");
console.log(matchOne.index); // → 4
console.log(pattern.lastIndex); // → 5
console.log('');

let global = /abc/g;
console.log(global.exec("xyz abc")); // → ["abc"]

let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // → null
console.log('');

let digit = /\d/g;
console.log(digit.exec("here it is: 1")); // → ["1"]
console.log(digit.exec("and now: 1")); // → null
console.log('');

console.log("Banana".match(/an/g)); // → ["an", "an"]
console.log('');

// Looping over matches
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let matchTwo;

while (matchTwo = number.exec(input)) {
    console.log("Found", matchTwo[0], "at", matchTwo.index);
}
console.log('');

// Parsing an INI file
function parseINI(string) {
    let result = {};
    let section = result;

    string.split(/\r?\n/).forEach(line => {
        line = line.trim(); // Remove leading and trailing whitespace
        let match;

        if (!line || line.startsWith(";")) {
            return; // Ignore empty lines and comments
        }

        if (match = line.match(/^\[(.+)\]$/)) {
            // If it's a section header, create a new object for that section
            section = result[match[1]] = {};
        } else if (match = line.match(/^(\w+)\s*=\s*(.*)$/)) {
            // If it's a key-value pair, store it in the current section
            section[match[1]] = match[2];
        } else {
            throw new Error(`Line '${line}' is not valid.`);
        }
    });

    return result;
}

// Correct input example
console.log(parseINI(`name=Vasilis
[address]
city=Tessaloniki`)); // → { name: "Vasilis", address: { city: "Tessaloniki" } }
console.log('');

// International characters
console.log(/🍎{3}/.test("🍎🍎🍎")); // → false
console.log(/<.>/.test("<🌹>")); // → false
console.log(/<.>/u.test("<🌹>")); // → true
console.log('');

console.log(/\p{Script=Greek}/u.test("α")); // → true
console.log(/\p{Script=Arabic}/u.test("α")); // → false
console.log(/\p{Alphabetic}/u.test("α")); // → true
console.log(/\p{Alphabetic}/u.test("!")); // → false