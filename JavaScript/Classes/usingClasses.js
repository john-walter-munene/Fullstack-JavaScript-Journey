class Color {
    constructor(r, g, b) {
      // Assign the RGB values as a property of `this`.
      this.values = [r, g, b];
    }
}

const red = new Color(255, 0, 0);
console.log(red);

// A class method can read the private fields of other instances, as long as they belong to the same class.
class NewColor {
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
  
const redNew = new NewColor(255, 0, 0);
const crimsonNew = new NewColor(220, 20, 60);
redNew.redDifference(crimsonNew); // 35
  

// Extending a class.
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