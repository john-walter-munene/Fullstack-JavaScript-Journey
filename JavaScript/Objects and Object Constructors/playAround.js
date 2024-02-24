let x = {};

console.log(Object.getPrototypeOf(x));
console.log(x.__proto__);

console.log(x.toString());

let y = [];

console.log(y.__proto__.__proto__);

y.__proto__ === Array.prototype;            // true
y.__proto__.__proto__ === Object.prototype; // true

Array.prototype.isPrototypeOf(y);      // true
Object.prototype.isPrototypeOf(Array); // true