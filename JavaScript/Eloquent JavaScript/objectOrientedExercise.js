// A vector type

class  Vec {
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
    }

    plus(vectorObj) {
        // Exit early and return undefined if passed arg not a Vec
        if (!vectorObj instanceof Vec) return; 
        return new Vec((this.x + vectorObj.x), (this.y + vectorObj.y));
    }

    minus(vectorObj) {
        // Exit early and return undefined if passed arg not a Vec
        if (!vectorObj instanceof Vec) return;

        // Handle x coordinates
        if (this.x > vectorObj.x) {
            this.x = this.x - vectorObj.x;
        } else this.x = vectorObj.x - this.x;
 
        // Handle y coordinates
        if (this.y > vectorObj.y) {
            this.y = this.y - vectorObj.y;
        } else this.y = vectorObj.y - this.y;

        return new Vec(this.x, this.y);
    }

    get length() {
        let cSquared = (this.x ** 2 + this.y ** 2);
        let cSquaredSquareRoot = cSquared ** (0.5);
        return Math.floor(Math.round(cSquaredSquareRoot)); 
    }
}

let testVec = new Vec (3, 4);
let tesVecTwo = new Vec(7, 24);

console.log(testVec.length); // 5
console.log(tesVecTwo.length); // 25

console.log(tesVecTwo.minus(testVec)); // Vec {x: 4, y: 20}
console.log('');

// Groups
// Custom implementation of the Set
class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if (!this.group.includes(value)) this.group.push(value);
    }

    delete(value) {
        let index = this.group.indexOf(value);
        if (index !== -1) this.group.splice(index, 1);
    }

    deleteTwo(value) {
        this.group = this.group.filter(item => item != value);
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(iterableObject) {
        let newGroup = new Group();
        for (const item of iterableObject) newGroup.add(item);
        return newGroup;
    }
}

let testGroup = new Group();

testGroup.add(1);
testGroup.add(2);
testGroup.add(3);
testGroup.add(3);
testGroup.add("Munene");

console.log(testGroup.group); // (4) [1, 2, 3, 'Munene']
console.log(testGroup.has("Munene")) // true
console.log(testGroup.delete("Munene")); // (3) [1, 2, 3]
console.log(testGroup.has("Munene")) // false
console.log('');

testGroup.add(4);
testGroup.add(5);
testGroup.add(6);
testGroup.add('Njoki');
console.log(testGroup.group);
console.log(testGroup.deleteTwo('Njoki'));
console.log('');

let fromTestGroup = Group.from([1, 2, 3, 4, 4, 3, 2, 1, 5]);
console.log(fromTestGroup.group); // (5) [1, 2, 3, 4, 5]
console.log(fromTestGroup instanceof Group); // true
console.log('');

// Iterable groups
// Iterable groups
class GroupIterator {
    constructor(group) {
        this.currentPosition = 0;
        this.group = group.group; // Access the actual array inside Group
    }

    next() {
        if (this.currentPosition >= this.group.length) return { done: true };
        return { value: this.group[this.currentPosition++], done: false };
    }
}

// Attach iterator to Group
Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

// Test iteration
for (let item of fromTestGroup) {
    console.log(item); // Should print each element of fromTestGroup.group
}
console.log('');

// Borrowing Methods
let map = Object.create(null);
map["hasOwnProperty"] = 'Some value';
map.key1 = 'value1';
map.key2 = 'value2';

console.log(map);

// Using Object.prototype.hasOwnProperty.call
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty")); // true
console.log(Object.prototype.hasOwnProperty.call(map, "key1")); // true
console.log(Object.prototype.hasOwnProperty.call(map, "key3")); // false
console.log('');

let mapTwo = {};
Object.setPrototypeOf(mapTwo, null);
mapTwo.hasOwnProperty = "some value";
mapTwo.key1 = "value1";
mapTwo.key2 = "value2";

// Manually checking for properties
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

console.log(hasOwnProperty(mapTwo, "hasOwnProperty")); // true
console.log(hasOwnProperty(mapTwo, "key1")); // true
console.log(hasOwnProperty(mapTwo, "key3")); // false