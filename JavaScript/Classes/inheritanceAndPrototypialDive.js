function Box(value) {
    this.value = value;
  }
Box.prototype.getValue = function () {
    return this.value;
  };
const box = new Box(1);
  
// Mutate Box.prototype after an instance has already been created
Box.prototype.getValue = function () {
    return this.value + 1;
  };

box.getValue(); // 2  

// Object literals (without the `__proto__` key) automatically
// have `Object.prototype` as their `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true

const newArray = new Array(1, 2, 3);
const newRegexp = new RegExp("abc");

Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself

Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype

function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null

class NewBase {}
class NewDerived extends Base {}

const newObj = new NewDerived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null

function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo);
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);

// Different ways of creating and mutating prototypes.
// Objects created with syntax constructs.
const o = { a: 1 };
// The newly created object o has Object.prototype as its [[Prototype]]
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// It is possible to point the newly created object's [[Prototype]] to
// another object via the __proto__ literal property. (Not to be confused
// with Object.prototype.__proto__ accessors)
// p ---> o ---> Object.prototype ---> null

// With constructor functions.
function Graph() {
    this.vertices = [];
    this.edges = [];
  }
  
Graph.prototype.addVertex = function (v) {
    this.vertices.push(v);
  };
  
const g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

// With Object.create.
const a = { a: 1 };
// a ---> Object.prototype ---> null

const nb = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(nb.a); // 1 (inherited)

const c = Object.create(nb);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d is an object that has null directly as its prototype)
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype

// Classes.
class Rectangle {
    constructor(height, width) {
      this.name = "Rectangle";
      this.height = height;
      this.width = width;
    }
  }
  
class FilledRectangle extends Rectangle {
    constructor(height, width, color) {
      super(height, width);
      this.name = "Filled rectangle";
      this.color = color;
    }
  }
  
const filledRectangle = new FilledRectangle(5, 10, "blue");
// filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null

// Object.setPrototypeOf().
const myObj = { a: 1 };
const anotherObj = { b: 2 };

Object.setPrototypeOf(myObj, anotherObj);

// With the __proto__accessor.
const myObject = {};
// Avoid using this, just for example
myObject.__proto__ = { barProp: "bar val" };
myObject.__proto__.__proto__ = { fooProp: "foo val"};