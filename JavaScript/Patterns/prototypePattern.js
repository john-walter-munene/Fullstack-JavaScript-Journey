class Dog {
    constructor(name) {
      this.name = name;
    }
  
    bark() {
      return `Woof!`;
    }
  }
  
const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = ()=> console.log("Playing now");
dog1.play();

// Extending classes.
class superDog extends Dog {
    constructor (name) {
        super (name);
    }

    fly() {
        return "Flying!";
    }
}

const dogOne = new superDog("Daisy");
const mySuperDog = Object.create(new superDog("Munene...!"));
console.log(mySuperDog.fly());

// Object.create.
const newDog = {
    bark() {
        return "Woof!";
    },
};

const myNewDog = Object.create(newDog);
console.log(newDog.bark());