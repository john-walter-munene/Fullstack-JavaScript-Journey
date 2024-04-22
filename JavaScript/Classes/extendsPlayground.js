class DateFormatter extends Date {
    getFormattedDate() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }
  
console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// Expected output: "19-Aug-1975"  

// Prototype of parent class must be an object or null.
function OldStyleClass() {
    this.someProperty = 1;
  }
OldStyleClass.prototype.someMethod = function () {};
  
class ChildClass extends OldStyleClass {}
  
class ModernClass {
    someProperty = 1;
    someMethod() {}
  }
  
class AnotherChildClass extends ModernClass {}
  
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!

class SomeClass extends class {
    constructor() {
      console.log("Base class");
    }
  } {
    constructor() {
      super();
      console.log("Derived class");
    }
  }
  
new SomeClass();
// Base class
// Derived class

class ParentClass {
    constructor() {
      return 1;
    }
  }
  
console.log(new ParentClass()); // ParentClass {}
// The return value is ignored because it's not an object
// This is consistent with function constructors

class ChildClass extends ParentClass {
    constructor() {
      super();
      return 1;
    }
  }
  
console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
  
// Extending null.
new (class extends null {})();
// TypeError: Super constructor null of anonymous class is not a constructor

new (class extends null {
  constructor() {}
})();
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

new (class extends null {
  constructor() {
    super();
  }
})();
// TypeError: Super constructor null of anonymous class is not a constructor

// Correct way to do it.
class NullClass extends null {
    constructor() {
      // Using new.target allows derived classes to
      // have the correct prototype chain
      return Object.create(new.target.prototype);
    }
  }
  
const proto = Object.getPrototypeOf;
console.log(proto(proto(new NullClass()))); // null
 
// Using Extends.
class Square extends Polygon {
    constructor(length) {
      // Here, it calls the parent class' constructor with lengths
      // provided for the Polygon's width and height
      super(length, length);
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = "Square";
    }
  
    get area() {
      return this.height * this.width;
    }
  }

// Extending plain objects.
const Animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    },
  };
  
class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
Object.setPrototypeOf(Dog.prototype, Animal);
  
const d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
  
// Extending built in objects.
class MyDate extends Date {
    getFormattedDate() {
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }

// Extending Object.
class C extends Object {
    constructor(v) {
      super(v);
    }
  }
  
console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
  
function MyObject(v) {
    return new Object(v);
  }
  class D extends MyObject {
    constructor(v) {
      super(v);
    }
  }
console.log(new D(1) instanceof Number); // true
  
// Species
class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() {
      return Array;
    }
  }
  
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

// Mix-ins.
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}  

// Avoiding inheritance.
class ReadOnlyMap extends Map {
    set() {
      throw new TypeError("A read-only map must be set at construction time.");
    }
  }

const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.

class ReadOnlyMap {
    #data;
    constructor(values) {
      this.#data = new Map(values);
    }
    get(key) {
      return this.#data.get(key);
    }
    has(key) {
      return this.#data.has(key);
    }
    get size() {
      return this.#data.size;
    }
    *keys() {
      yield* this.#data.keys();
    }
    *values() {
      yield* this.#data.values();
    }
    *entries() {
      yield* this.#data.entries();
    }
    *[Symbol.iterator]() {
      yield* this.#data[Symbol.iterator]();
    }
  }  