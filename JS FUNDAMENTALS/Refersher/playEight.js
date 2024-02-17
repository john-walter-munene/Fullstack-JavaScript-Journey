const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio () {
        console.log(`${this.name[0]} ${this.name[2]} is ${this.age} years old.`)
    },
    introduceSelf () {
        console.log(`Hi, I am ${this.name}`);
    }
};

const personTwo = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …
  };
  
console.log(personTwo["name"]["first"]);

function logProperty(propertyName) {
    console.log(person[propertyName]);
}

logProperty('name');

personTwo.age = 45;
personTwo["name"]["last"] = "Cratchit";
personTwo["eyes"] = "Hazel"
personTwo.farewell = function () {
    console.log("Bye everybody");
}

console.log(personTwo);
personTwo.farewell();

const myDataName = "Height";
const myDataValue = "1.75m";

personTwo[myDataName] = myDataValue;
console.log(personTwo);

const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
function createDeveloper (name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi, I am ${this.name}`);
    };
    return obj;
}

const developer = createDeveloper("Walter");
developer.introduceSelf();

// Constructors.
function Developer(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(this.name);
    };
}

const walterDev = new Developer("John Walter");
walterDev.introduceSelf();