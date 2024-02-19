/*My Solutions for CodeWars JS Quiz*/

function alphabetPosition(text) {
  
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let indices = "";
    let newText = text.toLowerCase();
    
    for (let j = 0; j < newText.length - 1; j++) {
      if (!/[a-z]/.test(newText[j])) continue;

      let index = alphabets.indexOf(newText[j]) + 1;
      indices += `${index} `;
    }
    console.log(indices);
    return indices.trim();
  }

function uniqueInOrder(string) {
    let myArray = [];

    for (let j = 0; j < string.length; j++) {
        if (string[j] == string[j - 1]) continue;
        myArray.push(string[j]);
    }
    console.log(myArray);
    return myArray;
}

function getSum(a, b) {
    let sum = 0;
    if (b > a) {
        for (let j = a; j <= b; j++) {
        sum += j;
      }
    } else if ( a > b) {
        for (let j = b; j <= a; j++) {
        sum += j;
      }
    } else { sum = a};

  console.log(sum);
  return sum;
}

function findEvenIndex(array) {

  for (let j = 0; j < array.length; j++) {
    let myLoopCounter = j;
    let precedingArray = array.slice(0, j);
    let postArray = array.slice(j + 1);

    let precedingArrayCounter = 0;
    let postArrayCounter = 0

    for (const item of precedingArray) {
      precedingArrayCounter += item;
    }
    for (const item of postArray) {
      postArrayCounter += item;
    }

    if (precedingArrayCounter == postArrayCounter) {
        console.log(myLoopCounter);
        return myLoopCounter;
       
    }
  } 
  return -1;
}

// Above solution refactored.
function findEvenIndexTwo(array) {
  for (let i = 0; i < array.length; i++) {
    const leftSum = array.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    const rightSum = array.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
    
    if (leftSum === rightSum) {
      return i;
    }
  }
    return -1;
}

function arrayDiff(arrayOne, arrayTwo) {
  return arrayOne.filter(item => !arrayTwo.includes(item));
}

function highAndLow(numbers) {
  let numbersArray = numbers.split(' ').map(Number);

    function compareNumeric(a, b) {
      return b - a;
    }

  let sortedArray = numbersArray.sort(compareNumeric);

  return `${sortedArray[0]} ${sortedArray[sortedArray.length - 1]}`;
}

function sumTwoSmallestNumbers(numbers) {  
  function compareNumeric(a, b) {
    return a - b;
  }

  let sortedArray = numbers.sort(compareNumeric);
  let sum = sortedArray[0] + sortedArray[1];
  console.log(sum);
  return sum;
}

function accum(string) {
  let stringArray = Array.from(string);

  let myNewString = "";

  for (let j = 0; j <= string.length; j++) {
    let newLetter = stringArray[j]
    newletter = newLetter.toUpperCase();

    let k = 0;
    while (k <= j) {
    myNewString += newLetter;
    }
    k++
    myNewString += "-"
  }
  let results = myNewString.slice(0, -1);
  console.log(results);
  return results;
}

accum("abcd")