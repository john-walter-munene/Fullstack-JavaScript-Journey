const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf () {
        console.log(`Hi, I am ${this.name[0]}`);
    }
}

const personOne = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …
  };

function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  
personOne.age = 45;
personOne["name"]["last"] = "Cratchit";
personOne["eyes"] = "hazel";
personOne.farewell = () => {
    console.log("Bye everybody")
}
  
logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
  
personOne.farewell();
const myDataName = "height";
const myDataValue = "1.75m";
personOne[myDataName] = myDataValue;

console.log(personOne);

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

person1.introduceSelf(), person2.introduceSelf();
  