let animal = {
    eats: true,
    walk() {
        console.log("Animal walking...")
    },
  };
let rabbit = {
    jumps: true,
    __proto__: animal,
  };
  
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit.walk();

let longEar = {
    earLength: 10,
    __proto__: rabbit,
}

longEar.walk();
console.log(longEar.jumps);

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName () {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true,
};

console.log(admin.fullName, "*");


// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName, "**");
console.log(user.fullName);

let animalTwo = {
    walk() {
        if (!this.isSleeping) {
            console.log("I walk...");
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbitTwo = {
    name: "White rabbit",
    __proto__: animalTwo,
}

rabbitTwo.sleep();

console.log(rabbitTwo.isSleeping); // True.
console.log(animalTwo.isSleeping); // Undefined property in prototype.

// For...in loop.
let animalThree = {
    eats: true,
};

let rabbitThree = {
    jumps: true,
    __proto__: animalThree,
}

// Object keys only return own keys.
console.log(Object.keys(rabbit)); // (1) ['jumps']

// For in loop iterates over both own and inherited keys.
for (let key in rabbitThree) {
    console.log(key, rabbit[key]);
}

// Filtering out inherited properties.
for (let property in rabbitThree) {
    let isOwnProperty = rabbitThree.hasOwnProperty(property);

    if (isOwnProperty) {
        console.log(`Our: ${property}`);
    } else {
        console.log(`Inherited: ${property}`);
    }
}