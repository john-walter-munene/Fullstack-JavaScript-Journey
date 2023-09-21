// Sample one

const x = function (z) {
    let w = 0;z.forEach(
  function (q) {
      w += q;
  });return w;
  };
  
  x([2, 2, 2]);

// Revised version

const sumArray = function (array) {
    let sum = 0;
    array.forEach(function (number) {
      sum += number;
    });
    return sum;
  };
  
  sumArray([2, 2, 2]);

// Using descriptive names. 

 // Good
 function getPlayerScore(){};
 function getPlayerName(){};
 function getPlayerTag(){};

 function getCount() {
    return numberOfThings;
  }

// Identation and line length.

// You could format it like this
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Good Example - the code tells all that is needed

function moveToNextElement(index) {
    index = index + 1;
    return index;
  }


function calculateBMI(height, weight) {
    // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}