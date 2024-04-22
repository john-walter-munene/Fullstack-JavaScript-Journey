const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}

class MyClass {
    // Constructor
    constructor() {
      // Constructor body
    }
    // Instance field
    myField = "foo";
    // Instance method
    myMethod() {
      // myMethod body
    }
    // Static field
    static myStaticField = "bar";
    // Static method
    static myStaticMethod() {
      // myStaticMethod body
    }
    // Static block
    static {
      // Static initialization code
    }
    // Fields, methods, static fields, and static methods all have
    // "private" forms
    #myPrivateField = "bar";
  }

  const myInstance = new MyClass();
  console.log(myInstance.myField); // 'foo'
  myInstance.myMethod();

  class Color {
    constructor(...values) {
      // Assign the RGB values as a property of `this`.
      this.values = values;
    }
  }
  const red = new Color(255, 0, 0);
  console.log(red);
  
  
  function createColor(r, g, b) {
    return {
      values: [r, g, b],
    };
  }
  
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false

class MyClass {
    constructor() {
      this.myField = "foo";
      return {};
    }
  }
  
console.log(new MyClass().myField); // undefined

class Color {
    constructor(r, g, b) {
      this.values = [r, g, b];
    }
    getRed() {
      return this.values[0];
    }
  }
  
  const red2 = new Color(255, 0, 0);
  console.log(red2.getRed()); // 255

class Color {
    constructor(r, g, b) {
      // values is now an HSL array!
      this.values = rgbToHSL([r, g, b]);
    }
    getRed() {
      return this.values[0];
    }
    setRed(value) {
      this.values[0] = value;
    }
  }
  
const red3 = new Color(255, 0, 0);
console.log(red3.values[0]); // 0; It's not 255 anymore, because the H value for pure red is 0

// Private values.
class Color {
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    getRed() {
      return this.#values[0];
    }
    setRed(value) {
      if (value < 0 || value > 255) {
        throw new RangeError("Invalid R value");
      }
      this.#values[0] = value;
    }
  }

const red4 = new Color(255, 0, 0);
red4.setRed(1000); // RangeError: Invalid R value
  
// A class method can read private fields of other methods if they are of same class.
class Color {
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    redDifference(anotherColor) {
      // #values doesn't necessarily need to be accessed from this:
      // you can access private fields of other instances belonging
      // to the same class.
      return this.#values[0] - anotherColor.#values[0];
    }
  }
  
const red5 = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red5.redDifference(crimson); // 35

// Private methods, getters, and setters.
class Counter extends HTMLElement {
    #xValue = 0;
    constructor() {
      super();
      this.onclick = this.#clicked.bind(this);
    }
    get #x() {
      return this.#xValue;
    }
    set #x(value) {
      this.#xValue = value;
      window.requestAnimationFrame(this.#render.bind(this));
    }
    #clicked() {
      this.#x++;
    }
    #render() {
      this.textContent = this.#x.toString();
    }
    connectedCallback() {
      this.#render();
    }
  }
  
customElements.define("num-counter", Counter);
  
// Accessor fields.
class Color {
    constructor(r, g, b) {
      this.values = [r, g, b];
    }
    get red() {
      return this.values[0];
    }
    set red(value) {
      this.values[0] = value;
    }
  }
  
const red6 = new Color(255, 0, 0);
red6.red = 0;
console.log(red6.red); // 0
  
// Public fields.
class MyClass {
    luckyNumber = Math.random();
  }
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3

// Equivalent to assigning prop in this.
class MyClass {
    constructor() {
      this.luckyNumber = Math.random();
    }
  }  

// Static properties.
class Color {
    static isValid(r, g, b) {
      return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
    }
  }
  
Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
  
// Static initialization block
// Runs first when class is first loaded.
class MyClass {
    static {
      MyClass.myStaticProperty = "foo";
    }
  }
  
console.log(MyClass.myStaticProperty); // 'foo'

// Extends and inheritance.
class Color {
    #values;
    constructor(r, g, b, a = 1) {
      this.#values = [r, g, b, a];
    }
    get alpha() {
      return this.#values[3];
    }
    set alpha(value) {
      if (value < 0 || value > 1) {
        throw new RangeError("Alpha value must be between 0 and 1");
      }
      this.#values[3] = value;
    }
  }
  
// Derived class.
class ColorWithAlpha extends Color {
    #alpha;
    constructor(r, g, b, a) {
      super(r, g, b);
      this.#alpha = a;
    }
    get alpha() {
      return this.#alpha;
    }
    set alpha(value) {
      if (value < 0 || value > 1) {
        throw new RangeError("Alpha value must be between 0 and 1");
      }
      this.#alpha = value;
    }
  }


const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255

// Overiding methods of parent class.
console.log(red.toString()); // [object Object]

class Color {
    #values;
    // …
    toString() {
      return this.#values.join(", ");
    }
  }
  
console.log(new Color(255, 0, 0).toString()); // '255, 0, 0'
class ColorWithAlpha extends Color {
    #alpha;
    // …
    toString() {
      // Call the parent class's toString() and build on the return value
      return `${super.toString()}, ${this.#alpha}`;
    }
  }
  
console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'

class ColorWithAlpha extends Color {
    // ...
    static isValid(r, g, b, a) {
      // Call the parent class's isValid() and build on the return value
      return super.isValid(r, g, b) && a >= 0 && a <= 1;
    }
  }
  
console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
const colorCheck = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(colorCheck instanceof Color); // true
console.log(colorCheck instanceof ColorWithAlpha); // true
  