class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log('Woof!');
    }
}

const dogOne = new Dog("Daisy");
const dogTwo = new Dog("Max");
const dogThree = new Dog("Spot");

console.log(Dog.prototype); // constructor: ƒ Dog(name, breed) bark: ƒ bark()
console.log(dogOne.__proto__); // constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(Dog.prototype === dogOne.__proto__); // True
console.log('');

Dog.prototype.play = () => console.log("Playing now");
dogOne.play();
console.log("");

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }  

    fly() {
        console.log("I am a flying Dog");
    }
}

const dogFour = new SuperDog("Mandy");
dogFour.play();
dogFour.fly();
console.log(SuperDog.prototype);
console.log(SuperDog.prototype === dogFour.__proto__);
console.log('');

// Object.create
const newDog = {
    bark() {
        console.log("Woof!");
    }
}

const newDogOne = Object.create(newDog);
newDog.bark();

console.log("Direct properties on pet1: ", Object.keys(newDogOne));
console.log("Properties on pet1's prototype: ", Object.keys(newDogOne.__proto__));