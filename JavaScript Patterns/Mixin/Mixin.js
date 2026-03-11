class Dog {
    constructor(name) {
        this.name = name;
    }
}

const dogFunctionality = {
    bark: () => console.log("Woof Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("PLaying"),
};

Object.assign(Dog.prototype, dogFunctionality);

const petOne = new Dog("Mark");
console.log(petOne.name);
petOne.bark(); // Woof...
petOne.wagTail(); // Wagging...
petOne.play(); // Play...
console.log('');

// Mixins themselves can inherit.
const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
};

const superDogFunctionality =  {
    bark: () => console.log("Woof Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("PLaying"),
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
};

Object.assign(superDogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, superDogFunctionality);