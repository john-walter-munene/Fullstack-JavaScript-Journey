// Example one.

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Rectangle  extends Shape {
    setWidth(newWidth) {
        this.width = newWidth;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }
}

class Square extends Shape {
    setWidth(newWidth) {
        this.width = newWidth;
        this.height = newWidth;
    }

    setHeight(newHeight) {
        this.height = newHeight;
        this.width = newHeight;
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5, 5);

// console.log(rectangle.area());
// console.log(square.area());

increaseRectangleWidth(rectangle);
increaseRectangleWidth(square);

// console.log(rectangle.area());
// console.log(square.area());

// Example two.
class FlyingBird {
    fly() {
        console.log("I can fly!");
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log("I can quack!");
    }
}

class SwimmingBird {
    swim() {
        console.log("I can swim!");
    }
}

class Penguine extends SwimmingBird { }

function makeFlyingBirdFly(bird) {
    bird.fly();
    return;
}

function makeSwimmingBirdSwim(bird) {
    bird.swim();
    return;
}

const duck = new Duck();
const penguine = new Penguine();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguine);