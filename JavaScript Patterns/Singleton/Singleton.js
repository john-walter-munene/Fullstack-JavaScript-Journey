let counter = 0;

class Counter{
    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance()); // false

// Above class doesn't meet the criteria for a singleton.

let instance;
let newCounter = 0;

class NewCounter {
    constructor() {
        if (instance) throw new Error("You can only create one instance");
        instance = this;
    }

    getInstance() { return this; };

    getCount() { return newCounter; };

    increment() { return ++newCounter; };

    decrement() { return --newCounter; };
}

const singletonCounter = Object.freeze(new NewCounter());
export { singletonCounter };

// Using a regular object
let counterForObject;

const counterObject = {
    increment() {
        return ++counterForObject;
    },
    decrement() {
        return --counterForObject;
    },
}

Object.freeze(counterObject);
export { counterObject };

// Dependency hiding

class SuperCounter {
    constructor() {
        this.count = 0;
    }

    increment() {
        counterObject.increment();
        return (this.count += 100);
    }

    decrement() {
        counterObject.decrement();
        return (this.count -= 100);
    }
}