function outer () {
    const outerVar = "Hey, I am the outer var!";

    function inner () {
        const innerVar = "Hey, I am an inner var!";
        console.log(innerVar);
        console.log(outerVar);
    } 
}

function outerTwo () {
    const outerVarTwo = "Hey, I am the outer var!";

    function innerTwo () {

        const innerVarTwo = "Hey, I am an inner Var!";
        console.log(outerVarTwo);
        console.log(innerVarTwo);

    }

    return innerTwo;
}

const innerFn = outer();
innerFn();

// Examples...
function createGreeting (greeting = "") {
    const myGreet = greeting.toUpperCase();

    return function (name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');

console.log(sayHello('Wes'));
console.log(sayHello('Camille'));
console.log(sayHey('Kait'));

// Private variables.
function createGame (gameName) {
    let score = 0;

    return function win () {
        score++;
        return `Your name ${gameName} score is ${score}`;
    } 
}

const hockeyGame = createGame('Hockey');

console.log(hockeyGame());
const soccerGame = createGame('Soccer');

let score = function () {
    let points = 0;

    return function () {
        return points += 1;
    }();
}

for (let j = 0; j < 10; j++) {
    console.log(score());
}