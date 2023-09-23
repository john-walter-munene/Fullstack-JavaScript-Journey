const cars = ['Crown', 'Mux', 'Bentley'];

const carsTwo = [
    'Subaru',
    'Outlander',
    'Volkswagen'
];

carsTwo[3] = 'Nissan';

console.log(carsTwo);

const newCars = new Array("Demio", 'Axio', 'Premio');
carsTwo[0] = "Opel";
let car = carsTwo[0];
 
// document.getElementById('demo'). innerHTML = carsTwo;

// Looping through array items.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruitsLength = fruits.length;

let text;

for (let i = 0; i < fruitsLength; i++) {
    console.log(fruits[i]);
};

fruits.push('Lemon');
fruits.forEach(myFunction);

function myFunction(value) {
    console.log(value);
};

