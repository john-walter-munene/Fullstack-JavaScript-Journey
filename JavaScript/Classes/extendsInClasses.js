class MyDate extends Date {
    getFormattedDate() {
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }
  
console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// Expected output: "19-Aug-1975"

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

// Examples.
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
  
// Composition over inheritance.
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
 