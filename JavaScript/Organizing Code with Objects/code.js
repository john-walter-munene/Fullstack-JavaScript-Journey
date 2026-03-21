const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  },
};

// Getting info out of an object
// dot notation
console.log(myObject.property); // "Value!"

// bracket notation
console.log(myObject["obnoxious property"]); // [Function]

// Objects as a data structure

// Without objects
// without objects
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// with objects
const playerOne = { name: "tim", marker: "X", };
const playerTwo = { name: "jenn", marker: "O", };

// But naming isn’t the only benefit. 
// Grouping related data together into objects allows you to pass all the data around more easily. 
// For example:

function gameOver(winningPlayer) {
  console.log("Congratulations!");
  console.log(`${winningPlayer.name} (${winningPlayer.marker}) is the winner!`);
}

gameOver(playerOne); // Congratulations // tim (x) is the winner!

// Objects as a design pattern
const car = {
  make: "Volkswagen",
  model: "Golf",
  year: 2026,
  color: "blue",
  priceUSD: 40000,

  // a method is just a function assigned to a property
  applyDiscount: function(discountPercentage) {
    const multiplier = 1 - discountPercentage / 100;
    this.priceUSD *= multiplier;
  },
  // shorthand way to add a method to an object literal
  getSummary() {
    return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at $${this.priceUSD} (USD).`;
  },

  // ...any other methods...
};

// Objects for more abstract concepts
const rps = {
  playerScore: 0,
  computerScore: 0,
  playRound(playerChoice) {
    // code to play the round, update score if needed, then return the result
  },
  getWinningPlayer() {
    // return the player with the most points ("player", "computer", or "tie")
  },
  reset() {
    // reset both players' scores to 0
  },
};

rps.playRound("rock"); // returns "player" because we're awesome at RPS
console.log(rps.playerScore); // 1 - we won and so our score increased

rps.playRound("rock"); // returns "computer" because... luck...
console.log(rps.computerScore); // 1

rps.playRound("scissors"); // returns "player" because we're awesome at RPS (again)
console.log(rps.playerScore); // 2
console.log(rps.getWinningPlayer()); // "player" since we're 2-1 up