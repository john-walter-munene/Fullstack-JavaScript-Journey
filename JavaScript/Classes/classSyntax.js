class MyClass {
    // class methods
    constructor() { }
    method1() { }
    method2() { }
    method3() { }
}

new MyClass();

class User {
    constructor (name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}

let john = new User("John");
john.sayHi();

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// Class expressions.
let Person = class {
    sayHi() {
        console.log("Hello..!");
    }
}

class Buddy {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
let bud = new Buddy("John");
console.log(bud.name); // John
  
smallUser = new Buddy(""); // Name is too short.

class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
let button = new Button("hello");
  
setTimeout(button.click, 1000); // hello