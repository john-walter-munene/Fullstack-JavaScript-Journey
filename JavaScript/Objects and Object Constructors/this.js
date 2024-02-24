const numbers = {
    numberA: 5,
    numberB: 10,
  
    sum: function() {
      console.log(this === numbers); // => true
  
      function calculate() {
        // this is window or undefined in strict mode
        console.log(this === numbers); // => false
        return this.numberA + this.numberB;
      }
  
      return calculate();
    }
  };
  
numbers.sum(); // => NaN or throws TypeError in strict mode

const numbersTwo = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbers); // => true
  
      function calculate() {
        console.log(this === numbers); // => true
        return this.numberA + this.numberB;
      }
  
      // use .call() method to modify the context
      return calculate.call(this);
    }
  };
numbers.sum(); // => 15  
console.log(numbersTwo.sum());

// Alternatively use an arrow function.
const numbersThree = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbers); // => true
  
      const calculate = () => {
        console.log(this === numbers); // => true
        return this.numberA + this.numberB;
      }
  
      return calculate();
    }
  };
  
numbersThree.sum(); // => 15

const calc = {
    num: 0,
    increment() {
      console.log(this === calc); // => true
      this.num += 1;
      return this.num;
    }
  };
  
// method invocation. this is calc
calc.increment(); // => 1
calc.increment(); // => 2

