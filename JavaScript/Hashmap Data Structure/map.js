const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1

const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

// Iterating over map.
for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
  }

const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];
  
// Use the regular Map constructor to transform a 2D key-value Array into a map
const myNewMap = new Map(kvArray);

console.log(myNewMap.get("key1")); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myNewMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myNewMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myNewMap.keys())); // ["key1", "key2"]
  
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)

const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);
// Merge maps with an array. The last repeated key wins.
const mergedNew = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three