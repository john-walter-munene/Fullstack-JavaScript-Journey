function isGameOver() {

    // game over logic goes here!
  
    if (gameOver) {
      const gameOverDiv = document.createElement('div');
      gameOverDiv.classList.add('game-over');
      gameOverDiv.textContent = `${this.winner} won the game!`;
      document.body.appendChild(gameOverDiv);
    }
  }

function isGameOver() {

    // game over logic goes here!
  
    if (gameOver){
      DOMStuff.gameOver(this.winner);
    }
  }

// Bad example.
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (xyz) { // Logic to determine whether or not the car should start
            this.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }

    errorLog(message) {
        console.log(message);
    }
}
  
// Following the single responsisbility principle.
// A Class or module should only have a single purpose.
class ErrorLog {
    static log(message) {
        console.log(message);
    }
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (xyz) { // Logic to determine whether or not the car should start
            ErrorLog.log(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        ErrorLog.log(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }
}