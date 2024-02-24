function Person(name) {
    this.name = name;

}

Person.prototype.sayName = function() {
    console.log(`Hello, I am ${this.name}`);
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is ${this.marker}`);
}
// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"

 let isItTrue = Object.getPrototypeOf(Player.prototype); // returns Object.prototype
 console.log(isItTrue);

 // Now make `Player` object inherit from `Person`
 Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O')

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'

// Initialize a constructor function for a new hero.

function Hero(name, level) {
    this.name = name;
    this.level = level; 
}

let heroOne = new Hero('John Walter', 9521);

// Linking object properties using Object.setPropertyOf()
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Add a method to the Hero prototype.
Hero.prototype.greet = function() {
    return `${this.name} says hello!`;
}

// Initialize Warrior Constructor
function Warrior(name, level, weapon) {
    // Chain constructor with call
    Hero.call(this, name, level);

    // Add a new property
    this.weapon = weapon;
}

Warrior.prototype.attack = function() {
    return `${this.name} attacks with ${this.weapon}.`;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

let heroTwo = new Warrior("Munene Njeru", 9521, "AK47--->");
let heroThree = new Healer("John Walter", 9521, "Cure!");

console.log(heroTwo);
console.log(heroTwo.attack());
console.log(heroThree.greet());