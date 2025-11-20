let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[2]); // → 5
console.log(listOfNumbers[0]); // → 2
console.log(listOfNumbers[2 - 1]); // → 3

let testObj = {
    x: 'X',
};

console.log(testObj['x']);
console.log(testObj.x);

function returnX() {
    return 'x';
}

console.log(testObj[returnX()]);

// Methods.
let doh = 'Doh';
console.log(typeof doh.toUpperCase); // → function
console.log(doh.toUpperCase()); // → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); // → [1, 2, 3, 4, 5]
console.log(sequence.pop()); // → 5
console.log(sequence); // → [1, 2, 3, 4]

// Objects.
let dayOne = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running'],
};

console.log(dayOne.squirrel); // → false
console.log(dayOne.wolf); // → undefined
dayOne.wolf = false;
console.log(dayOne.wolf);

let descirptions = {
    work: "Went to work",
    'touched tree': "Touched a tree",
};

let anObject = {
    left: 1,
    right: 2,
};

delete anObject.left;
console.log(anObject.left); // → undefined
console.log('left' in anObject); // → false
console.log('right' in anObject); // → true
anObject.right = undefined;
console.log('right' in anObject) // → true

// Finding out properties in an object.
console.log(Object.keys({x: 0, y: 0, z: 2})); // → ['x', 'y', 'z']
console.log(Object.values({x: 0, y: 1, z: 2})); // → [0, 1, 2]

// Copy all props from one object to another.
let objectA = {
    a: 1,
    b: 2,
};

Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    },  /* and so on... */
];
console.log('');

// Mutability.
let object1 = { value: 10, };
let object2 = object1;
let object3 = { value: 10, };
console.log(object1 === object2); // → true
console.log(object1 === object3) // → false
object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value) // → 10

const score = { visitors: 0, home: 0, };
// This is okay.
score.visitors = 1;
// This isn't allowed
// score = { visitors: 1, home: 1, };

// Thelycanthrope'slog
let jacquesJornal = [];
function addEntry(events, squirrel) {
    jacquesJornal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// Computing correlation.
let tableOne = [76, 9, 4, 1, ];
let tableTwo = [[76, 9], [4, 1]];

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / 
        Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2])); 
}

console.log(phi(tableOne)); // → 0.068599434

function tableFor(event, journal) {

    let table = [0, 0, 0, 0];
    
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    
    return table; 
}

console.log(tableFor('pizza', jacquesJornal));

// Arrayloops
for (let entry of jacquesJornal) {
    console.log(`${entry.events.length} events.`);
}

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }

    return events;
}

console.log(journalEvents(jacquesJornal)); 
// (14) ['work', 'touched tree', 'pizza', 'running', 'television', 'ice cream', 'cauliflower', 'lasagna', 'brushed teeth', 'weekend', 'cycling', 'break', 'peanuts', 'beer']

// Seeing all corelations.
for (let event of journalEvents(jacquesJornal)) {
    console.log(`${event} : ${phi(tableFor(event, jacquesJornal))}`);
}

// Try sth...
for (let entry of jacquesJornal) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", jacquesJornal)));
console.log('');

// Further Arrayology.
let todoList = [];
function remember(task) {
    todoList.push(task);
}

function getTask() {
    return todoList.shift();
}

function rememberUrgently(task) {
    todoList.unshift(task);
}

remember('Groceries');
console.log(getTask());

console.log([1, 2, 3, 2, 1].indexOf(2)); // → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3

console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]
console.log('');

// Strings and their properties.
let kim = "Kim";
kim.age = 88;
console.log(kim.age); // → undefined

console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5

console.log("one two three".indexOf("ee"));
console.log(" okay \n ".trim()); // → okay
console.log(String(6).padStart(3, "0")); // → 006
console.log('');

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // → ['Secretarybirds', 'specialize', 'in', 'stomping']
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3)); // → LALALA
console.log('');

// Rest parameters
function max(...numbers) {
    let result = -Infinity;

    for (let number of numbers) {
        if (number > result) result = number;
    }

    return result
}

console.log(max(4, 1, 9, -2));

let numbersArray = [5, 1, 7];
console.log(max(...numbersArray));

let wordsArray = ["never", "fully"];
console.log(["will", ...wordsArray, "understand"]); // → ["will", "never", "fully", "understand"]
console.log('');

// TheMathobject
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle), };
}

console.log(randomPointOnCircle(2)); // → {x: 0.3667, y: 1.966}
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log('');

// Destructuring
let { name } = { name: "Faraji", age: 23};
console.log(name); // → Faraji

// JSON
let myJSON = {
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
};

let string = JSON.stringify(myJSON);
console.log(string); // → {"squirrel":false,"events":["work","touched tree","pizza","running"]}
console.log(JSON.parse(string).events[1]) // → touched tree
console.log('');