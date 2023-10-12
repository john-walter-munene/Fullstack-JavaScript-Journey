// Add your code here
function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
      console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
}

let catOne = new Cat('Bertie', 'Cymric', 'white');
let catName = catOne['name'];
catOne.greeting();
let catTwo = new Cat('Becky', 'Titanic', 'black')
catTwo.greeting();

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);