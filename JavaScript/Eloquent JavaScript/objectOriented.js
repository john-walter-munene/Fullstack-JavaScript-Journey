// A simple method.
let rabbit = {};

rabbit.speak = function (line) {
    console.log(`The rabbit says: ${line}`);
};

rabbit.speak('I\'m alive.'); // The rabbit says: I'm alive.

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {
    type: 'White',
    speak,
};

let hungryRabbit = {
    type: 'hungry',
    speak,
};

whiteRabbit.speak('Oh my ears and whiskers, how late it\'s getting!'); // The White rabbit says 'Oh my ears and whiskers, how late it's getting!'
hungryRabbit.speak('I could use a carrot right now'); // The hungry rabbit says 'I could use a carrot right now'

// Passing this explicity, using function.call method.
speak.call(hungryRabbit, 'Burp! Called through explicit passing of this!');

// Arrow functions see the this binding of the scope around them.
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 }); // (3) [0, 0.4, 0.6]
console.log('');

// Prototypes.
let empty = {};

console.log(empty.toString); // → function toString()…{}
console.log(empty.toString()); // → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // → null
console.log('');

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // → true
console.log (Object.getPrototypeOf(function () {}) == Function.prototype); // true
console.log(Object.getPrototypeOf([]) == Array.prototype); // → true
console.log('');

// create an object with a specific prototype
let protoRabbit = {
    protoCheck: 'Only found in Ancester Rabbit!',
    speak(line) {
        console.log(`The ${this.type} rabbit says: '${line}'`);
    },

    confirmProto() {
        console.log(this.protoCheck);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'Killer';
killerRabbit.speak('About to kill...'); // The Killer rabbit says: 'About to kill...'
killerRabbit.confirmProto(); // Only found in Ancester Rabbit!
console.log('');

// Constructors
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); // → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype); // → true

// Class notation
class RabbitsNew {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} says: '${line}'`);
    }
}

let killerRabbitNew = new RabbitsNew("killer");
let blackRabbitNew = new RabbitsNew("black");

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord()); // → hello
console.log('');

// Overridingderivedproperties
RabbitsNew.prototype.teeth = "small";
console.log(killerRabbitNew.teeth);

killerRabbitNew.teeth = "long, sharp, and bloody";
console.log(killerRabbitNew.teeth); // → long, sharp, and bloody

console.log(blackRabbitNew.teeth); // → small
console.log(RabbitsNew.prototype.teeth); // → small
console.log('');

// Example: give the standard function and array prototypes a different toString
console.log(Array.prototype.toString == Object.prototype.toString); // → false
console.log([1, 2].toString()); // → 1,2

let testArray = [1, 2, 3, 4, 5, 6, ,7, 8, 9, 10,];
console.log(testArray.toString());
console.log(Object.prototype.toString.call(testArray)); // → [object Array]
console.log(Object.prototype.toString.call([1, 2])); // → [object Array]
console.log('');
// MAPS
// Using Objects
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`); // → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages); // → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages); // → Is toString's age known? true
console.log('');

// Enter maps
console.log("toString" in Object.create(null)); // → false

let agesTwo = new Map();
agesTwo.set("Boris", 39);
agesTwo.set("Liang", 22);
agesTwo.set("Júlia", 62);
 
console.log(`Júlia is ${agesTwo.get("Júlia")}`); // → Júlia is 62
console.log("Is Jack's age known?", agesTwo.has("Jack")); // → Is Jack's age known? false
console.log(agesTwo.has("toString")); // → false
console.log('');

// Treating an object as a map.
console.log({x: 1}.hasOwnProperty("x")); // → true
console.log({x: 1}.hasOwnProperty("toString")); // → false
console.log('');

// Polymorphism
RabbitsNew.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};

console.log(String(blackRabbitNew)); // → a black rabbit
console.log('');

//  Symbols
let sym = Symbol("name");
console.log(sym == Symbol("name")); // → false
RabbitsNew.prototype[sym] = 55;
console.log(blackRabbitNew[sym]); // → 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString()); // → 1,2
console.log([1, 2][toStringSymbol]()); // → 2 cm of blue yarn

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]()); // → a jute rope
console.log('');

//  Theiteratorinterface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // → {value: "O", done: false}
console.log(okIterator.next()); // → {value: "K", done: false}
console.log(okIterator.next()); // → {value: undefined, done: true}

// Implementing an iterable data structure
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.y == this.matrix.height) return { done: true };
        
        let value = { 
            x: this.x, y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        
        this.x++;
        
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
            
        return { value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

for (let {x, y, value} of matrix) {
    console.log(x, y, value); // → 0 0 value 0,0 // → 1 0 value 1,0 // → 0 1 value 0,1 // → 1 1 value 1,1
}
console.log('');
 
// Getters, setters, and statics
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size); // → 73
console.log(varyingSize.size); // → 49
console.log('');

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }       
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius); // → 30
console.log('');

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let symetricmatrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(symetricmatrix.get(2, 3));    // → 3,2
console.log('');

//  Theinstanceofoperator
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); // → true
console.log(new SymmetricMatrix(2) instanceof Matrix); // → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix); // → false
console.log([1] instanceof Array); // → true
console.log('');

//  Persistent data
let persistenObject = Object.freeze({value: 5});
persistenObject.value = 10;
console.log(persistenObject.value); // → 5 