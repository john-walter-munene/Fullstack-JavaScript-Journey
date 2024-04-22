class ClassWithPrivate {
    #privateField;
    #privateFieldWithInitializer = 42;
  
    #privateMethod() {
      // …
    }
  
    static #privateStaticField;
    static #privateStaticFieldWithInitializer = 42;
  
    static #privateStaticMethod() {
      // …
    }
  }

class Stamper extends class {
    // A base class whose constructor returns the object it's given
    constructor(obj) {
      return obj;
    }
  } {
    // This declaration will "stamp" the private field onto the object
    // returned by the base class constructor
    #stamp = 42;
    static getStamp(obj) {
      return obj.#stamp;
    }
  }
  
const obj = {};
new Stamper(obj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`
  
console.log(obj); // In some dev tools, it shows {#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false
  
// You cannot stamp private properties twice
new Stamper(obj); // Error: Initializing an object twice is an error with private fields  

class ClassWithPrivateStaticField {
    static #privateStaticField = 42;
  
    static publicStaticMethod() {
      return ClassWithPrivateStaticField.#privateStaticField;
    }
  }
  
console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
class Subclass extends ClassWithPrivateStaticField {}

Subclass.publicStaticMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it

class ClassWithPrivateMethod {
    #privateMethod() {
      return 42;
    }
  
    publicMethod() {
      return this.#privateMethod();
    }
  }
  
const instance = new ClassWithPrivateMethod();
console.log(instance.publicMethod()); // 42  

class ClassWithPrivateAccessor {
    #message;
  
    get #decoratedMessage() {
      return `🎬${this.#message}🛑`;
    }
    set #decoratedMessage(msg) {
      this.#message = msg;
    }
  
    constructor() {
      this.#decoratedMessage = "hello world";
      console.log(this.#decoratedMessage);
    }
  }
  
new ClassWithPrivateAccessor(); // 🎬hello world🛑

class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
      return 42;
    }
  
    static publicStaticMethod() {
      return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }
  }
  
console.log(ClassWithPrivateStaticMethod.publicStaticMethod()); // 42

class Subclass extends ClassWithPrivateStaticMethod {}

console.log(Subclass.publicStaticMethod()); // TypeError: Cannot read private member #privateStaticMethod from an object whose class did not declare it