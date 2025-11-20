// Looping a triangle.
// Method one.
let symbol = '#';
let symbolsString = '';
for (let counter = 0; counter < 7; counter++) console.log(symbolsString += symbol);
console.log('');

// Method two.
let counter = 0;
let symbolsText = '';

while (counter < 7) {
    console.log(symbolsText += symbol);
    counter++;
}
console.log('');

// Method three.
let symbolsBase = '';
do {
    console.log(symbolsBase += symbol);
} while (symbolsBase.length <= 7);
console.log('');

// Fizz Buzz.
function fizzBuzz(number) {
    let fizzBuzzedString = '';
    for (let counter = 1; counter <= number; counter++) {
        if (counter % 3 === 0 && counter % 5 === 0) fizzBuzzedString += 'FizzBuzz ';
        else if (counter % 3 === 0) fizzBuzzedString += 'Fizz ';
        else if (counter % 5 === 0) fizzBuzzedString += 'Buzz ';
        else fizzBuzzedString += `${counter} `;
    }

    console.log(fizzBuzzedString);
}

fizzBuzz(100);
console.log('');

// Chess Board.
function generateChessBoard(size) {
    let hashSymbol = '#';
    let absentHashSymbol = ' ';
    let currentSymbol = absentHashSymbol;
    let board = '';

    for (let counter = 0; counter < size; counter++) {
        for (let innerCounter = 0; innerCounter < size; innerCounter++) {
            board += currentSymbol;
            currentSymbol = currentSymbol === absentHashSymbol ? hashSymbol : absentHashSymbol;    
        }

        board += "\n"
        currentSymbol = currentSymbol === absentHashSymbol ? hashSymbol : absentHashSymbol; 
    }

    console.log(board);
}

generateChessBoard(4);
generateChessBoard(8);