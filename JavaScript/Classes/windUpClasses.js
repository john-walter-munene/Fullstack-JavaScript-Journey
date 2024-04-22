// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
// Expression; the class has its own name
const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

// Methods...
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
const square = new Rectangle(10, 10);
  
console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]

// Static methods and fields.
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

// Field declarations.
class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

// Inheritance.
class Animal {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes noise.`);
    }
}

class Dog extends Animal {
    constructor (name) {
        super (name); // Call super class constructor and pass in the name paremeter.
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Johnie');
dog.speak();

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
class Lion extends Cat {
    speak() {
      super.speak();
      console.log(`${this.name} roars.`);
    }
  }
  
const myCat = new Lion("Fuzzy");
myCat.speak(); // Fuzzy makes a noise. Fuzzy roars.

//  Binding this with instance and private methods.
class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
const eat = Animal.eat;
eat(); // undefined

// If above code is written in traditional syntax, this is bound to primary object.
function NewAnimal() {}

NewAnimal.prototype.speak = function () {
  return this;
};

NewAnimal.eat = function () {
  return this;
};

const objNew = new Animal();
const speakNew = objNew.speak;
speak(); // global object (in non–strict mode)

const eatNew = Animal.eat;
eatNew(); // global object (in non-strict mode)