// Prototyping in JavsScript
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
    },

    sleep(length) {
        console.log(`${this.name} is sleeping.`);
        this.energy += length;
    },

    play(length) {
        console.log(`${this.name} is playing.`);
        this.energy -= length;
    },
};

function Animal (name, energy) {
    let animal = {};
    animal.name = name;
    animal.energy = energy;
    animal.eat = animalMethods.eat;
    animal.sleep = animalMethods.sleep;
    animal.play = animalMethods.play;

    return animal;
}

const leo = Animal('Leonard', 9);

// Improving above code using Object.create()...
function AnimalTwo(name, energy) {
    let animal = Object.create(animalMethods);

    animal.name = name;
    animal.energy = energy;

    return animal;
}

const leoTwo = AnimalTwo('Leonard', 9);
const snoop = AnimalTwo("SnoopyGee", 21);

leoTwo.eat(10);
snoop.play(5);

// Introducing prototype to fix above problems.
// Prototypal instantiation.
function AnimalThree(name, energy) {
    let animal = Object.create(AnimalThree.prototype);
    animal.name = name;
    animal.energy = energy;

    return animal;
}

AnimalThree.prototype.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
};

AnimalThree.prototype.sleep = function(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
};

AnimalThree.prototype.play = function(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
}

const leoThree = AnimalThree("Leonard", 9);
const snoopThree = AnimalThree("SnoopGee", 21);
leoThree.eat(10);
snoopThree.play(8);

// Classes in JS.
class AnimalClass{
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        console.log(`${this.name} is easting`);
        this.energy += amount;
    }

    sleep(length) {
        console.log(`${this.name} is sleeping.`);
        this.energy += length;
    }

    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
}

const leoFromClass = new AnimalClass("Leonard", 9);
const snoopFromClass = new AnimalClass("SnoopGee", 21);

// Static methods.
// Important methods, but need not be shared.

class AnimalClassTwo {
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        console.log(`${this.name} is easting`);
        this.energy += amount;
    }

    sleep(length) {
        console.log(`${this.name} is sleeping.`);
        this.energy += length;
    }

    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }

    static nextToEat(animals) {
    const sortedByLeastEnergy = animals.sort((a, b) => {
        return a.energy - b.energy;
    })
    return sortedByLeastEnergy[0].name;
  }
}



const leoFromClassTwo = new AnimalClassTwo("Leonard", 9);
const snoopFromClassTwo = new AnimalClassTwo("SnoopGee", 21);

console.log(AnimalClassTwo.nextToEat([leoFromClass, snoopFromClassTwo])); // Leonard.

// Redoing static methods on ES5.
function AnimalFour (name, energy) {
    this.name = name
    this.energy = energy
  }

AnimalFour.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

AnimalFour.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }

AnimalFour.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }

AnimalFour.nextToEat = function (nextToEat) {
    const sortedByLeastEnergy = nextToEat.sort((a,b) => {
      return a.energy - b.energy;
    })
    return sortedByLeastEnergy[0].name;
  }

const leoFour = new AnimalFour('Leonard', 9);
const snoopFour = new AnimalFour('SnoopGee', 21);
console.log(AnimalFour.nextToEat([leo, snoop])); // Leonard

// Getting the prototype of an object.
console.log(Object.getPrototypeOf(leoFour) === AnimalFour.prototype);

// Determining if a property lives on prototype.

// Enumerating all props including those of the prototype.
for (const key in leoFour) {
    console.log(`${key} <--> ${leoFour[key]}`);
}
console.log("Switching....")

// Enumerating props on Object alone, excluding those of its prototype.
const testObject = new AnimalThree("Waltezo", 20);
for (const prop in testObject) {
    if (leo.hasOwnProperty(prop)) {
        console.log(`${prop} <---> ${testObject[prop]}`);
    }
}
console.log(leoFour.hasOwnProperty('eat'));

// Recreating Object.create()
Object.create = function(objToDelegateTo) {
    function Fn () {};
    Fn.prototype == objToDelegateTo
    return new Fn;
};
