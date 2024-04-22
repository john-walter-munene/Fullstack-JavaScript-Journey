// Class Declaration
class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; Anonymous class but assigned to a variable
const RectangleTwo = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Expression; class has its own name
const RectangleThree = class NewRectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Methods.
class HybridRectangle {
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
  
const square = new HybridRectangle(10, 10);
  
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
const p2 = new Point(5, 5);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

