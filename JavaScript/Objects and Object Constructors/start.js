const myObject = {
    poperty: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff
  }
};

// Constructors
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name);
    }
}

const player = new Player("Walter", "X");
const player2 = new Player('also Walter', 'O');

player.sayName();
player2.sayName();

console.log(Object.getPrototypeOf(player) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);

Player.prototype.sayHello = function() {
    console.log("Hello, I am a player");
}

player.sayHello();
player2.sayHello();

// Player.prototype.__proto__
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
console.log(player.valueOf());

console.log(player.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));