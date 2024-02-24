// JavaScript Inheritance and the Prototype Chain.

// ES5.
function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
}

Animal.prototype.sleep = function(amount) {
    console.log(`${this.name} is sleeping.`)
    this.energy += amount;
}

Animal.prototype.play = function(amount) {
    console.log(`${this.name} is playing.`);
    this.energy -= amount;
}

const leo = new Animal("Leonard", 9);

console.log(leo);
console.log(leoTwo);

// Individual classes for specific animals in ES5.
function Dog(name, energy, breed) {
    Animal.call(this, name, energy);
    this.name = name;
    this.energy = energy;
    this.breed = breed;
}

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const charlie = new Dog('Charlie', 10, 'Goldendoodle')
charlie.eat();

Dog.prototype.bark = function () {
    console.log("Woof! Wooof!");
    this.energy -= .1;
}

function Cat(name, energy, declawed) {
    Animal.call(this, name, energy);

    this.declawed = declawed;
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Cat.prototype = Cat;

Cat.prototype.meow = function () {
    console.log('Meow');
    this.energy -= .1;
}

// ES6
class AnimalClass {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
    }

    sleep(amount) {
        console.log(`${this.name} is sleeping.`)
        this.energy += amount;
    }

    play(amount) {
        console.log(`${this.name} is playing.`);
        this.energy -= amount; 
    }
}

const leoTwo = new AnimalClass("LeonardTwo", 9);

// Individual classes for specific animals in ES6.
class DogClass extends AnimalClass {
    constructor(name, energy, breed) {
        this.breed = breed;
        super(name, energy) // calls AnimalClass constructor.
    }
    
    bark() {
        console.log("Woof! Woof!");
        this.energy -= .1;
    }
}