// Any class should be a substitute for its parent class without unexpected consequences.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }
}

class Square extends Rectangle {}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`);
console.log(`Height: ${square.height}, Width: ${square.width}`);

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`);

// For above case it would be best if:
// Squares and Rectangles inherit from a shape class. Or,
// Polymorphism.