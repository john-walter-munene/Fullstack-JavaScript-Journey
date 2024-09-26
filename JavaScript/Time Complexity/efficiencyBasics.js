function oddNumbersLessThanTen() {
    let currentNumber = 1;

    while (currentNumber < 10) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
        }

        currentNumber +=1;
    }
}

oddNumbersLessThanTen();

function oddNumbers(maxNumber) {
    let currentNumber = 1;
  
    while (currentNumber < maxNumber) {
      if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
      }
  
      currentNumber += 1;
    }
  }
  
  function findValue(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item === 1) {
        return item;
      }
    }
  }

// Algorithms with the same complexity.
