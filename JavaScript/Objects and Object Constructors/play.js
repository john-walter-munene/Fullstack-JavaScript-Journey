var Dog = function(name) {
    this.name = name;

    var barkCount = 0;

    this.bark = function() {
        barkCount++;
        console.log(`${this.name} bark`);
    }

    this.getBarkCount = function() {
        console.log(`${this.name} has barked ${barkCount} times.`);
    };
};

Dog.prototype.wagTail = function() {
    console.log(`${this.name} wagging tail.`);
}

var dog = new Dog("Jade");
dog.bark();
dog.bark();

dog.getBarkCount();
dog.wagTail();