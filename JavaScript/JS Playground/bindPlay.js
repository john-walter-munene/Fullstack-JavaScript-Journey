// Top-level 'this' is bound to 'globalThis' in scripts.
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// The 'this' parameter of 'getX' is bound to 'module'.
console.log(module.getX()); // 81

const retrieveX = module.getX;
// The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
console.log(retrieveX()); // 9

// Create a new function 'boundGetX' with the 'this' parameter bound to 'module'.
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81'


class LateBloomer {
    constructor() {
      this.petalCount = Math.floor(Math.random() * 12) + 1;
    }
    bloom() {
      // Declare bloom after a delay of 1 second
      setTimeout(this.declare.bind(this), 1000);
    }
    declare() {
      console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
    }
}

const flower = new LateBloomer();
flower.bloom();
// After 1 second, calls 'flower.declare()'

class LateBloomer {
    bloom() {
      // Declare bloom after a delay of 1 second
      setTimeout(() => this.declare(), 1000);
    }
  }

  
// Bound functions used as constructors
function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
Point.prototype.toString = function () {
    return `${this.x},${this.y}`;
};
  
const p = new Point(1, 2);
p.toString();
// '1,2'
  
// The thisArg's value doesn't matter because it's ignored
const YAxisPoint = Point.bind(null, 0 /*x*/);
  
const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'
  
axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true