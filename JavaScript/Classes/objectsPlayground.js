const obj = {
    property1: value1, // property name may be an identifier
    2: value2, // or a number
    "property n": value3, // or a string
  };

let x;
if (cond) {
    x = { greeting: "hi there" };
  }

const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M"); 

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const myCar = new Car("Eagle", "Talon TSi", 1993, rand);
const kenscar = new Car("Nissan", "300ZX", 1992, ken);
console.log(myCar.owner.name);

// Object.create method
// Animal properties and method encapsulation
const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
      // Method which will display type of Animal
      console.log(this.type);
    },
  };
  
// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates
  
// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes

const myObj = {};
const str = "myString";
const randi = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[randi] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log(myObj);
// {
//   type: 'Dot syntax for a key named type',
//   'date created': 'This key has a space',
//   myString: 'This key is in variable str',
//   '0.6398914448618778': 'A random number is the key here',
//   '[object Object]': 'This key is object anotherObj',
//   '': 'This key is an empty string'
// }
console.log(myObj.myString); // 'This key is in variable str'
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }

function showProps(obj, objName) {
    let result = "";
    for (const i in obj) {
      // Object.hasOwn() is used to exclude properties from the object's
      // prototype chain and only show "own properties"
      if (Object.hasOwn(obj, i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }
showProps(myCar, 'myCar');

function showPropsTwo(obj, objName) {
    let result = "";
    Object.keys(obj).forEach((i) => {
      result += `${objName}.${i} = ${obj[i]}\n`;
    });
    console.log(result);
  }

// Listing inherited non enumerable props.
function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];
  
    while (objectToInspect !== null) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
      objectToInspect = Object.getPrototypeOf(objectToInspect);
    }
  
    return result;
  }

// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log("a" in myobj); // false

Car.prototype.color = "red";
console.log(car1.color); // "red"

objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
};

Car.prototype.displayCar = function () {
    const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
    console.log(result);
  };
  
const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };
  
function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
  
Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone
  
const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };
  
console.log(myObj.a); // 7
console.log(myObj.b); // 8, returned from the get b() method
myObj.c = 50; // Calls the set c(x) method
console.log(myObj.a); // 25

// Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false

// Two variables, a single object
const fruitTwo = { name: "apple" };
const fruitbearTwo = fruitTwo; // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruitTwo == fruitbearTwo; // return true
fruitTwo === fruitbearTwo; // return true

fruitTwo.name = "grape";
console.log(fruitbear); // { name: "grape" }; not { name: "apple" }
