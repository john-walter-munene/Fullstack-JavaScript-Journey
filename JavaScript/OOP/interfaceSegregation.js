// Entities should never implement an interface with elements it'll never use.

class Penguine {}

class Bird {}

const flyer = {
    fly() {
        console.log("Flap flap, I'm flying.")
    }
}

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly();

const penguine = new Penguine();
penguine.fly();

// I may run into messy code. If so, opt out for composition.