// Working with prototype
let animal = {
    jumps: null,
};

let rabbit = {
    __proto__: animal,
    jumps: true,
};

console.log(rabbit.jumps) // true.

delete rabbit.jumps;
console.log(rabbit.jumps); // null.

delete animal.jumps;
console.log(animal.jumps); // null

// Searching algorithm
let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

// Where does it write?
let animalTwo = {
    eat() {
        this.full = true;
    },
};

let rabbitTwo = {
    __proto__: animalTwo,
};

rabbitTwo.eat() // Get the method from its prototype, but executes in its context.

// Why are both Hamsters full?
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
};

let lazy = {
    __proto__: hamster,
}

// This one found food.
speedy.eat('Apples');

// This one has it, why? Fix please...
// Use a simple assignment
console.log(lazy.stomach);

let hamsterTwo = {
    stomach: [],

    eat(food) {
        this.stomach = food;
    },
};

let speedyTwo = {
    __proto__: hamsterTwo,
};

let lazyTwo = {
    __proto__: hamsterTwo,
};

// speedyTwo found food.
speedyTwo.eat("Mango");

console.log(speedyTwo.stomach);
console.log(lazyTwo.stomach);

// Above problem could alternatively be solved by ensuring each hamster has their own stomach.
let hamsterThree = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    },
};

let speedyThree = {
    __proto__: hamsterThree,
    stomach: [],
};

let lazyThree = {
    __proto__: hamsterThree,
    stomach: [],
}

// speedyThree found food.

speedyThree.eat("Banana");
console.log(speedyThree.stomach, "<-->", lazyThree.stomach);