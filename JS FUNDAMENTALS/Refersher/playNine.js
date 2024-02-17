const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}`);
    },
}

const catName = cat.name;
console.log(`The cat's name is ${catName}`);
console.log(`The cat's color is ${cat.color}`);
cat.greeting();
console.log("");

const theExpertiseWins = {
    name: "The Expertise Wins",
    nationality: "Kenyan",
    genre: "Drill Music",
    members: 2,
    formed: 2019,
    currenYear: 2024,
    split: false,
    albums: [
        {
            name: "The Developer Project",
            released: 2019,
        },
        {
            name: "The Writer Project",
            released: 2020,
        },
    ],
    bandInfo () {
        console.log(`Hi, we are ${this.name}.
        \nComing from ${this.nationality}, we've been active for ${this.currenYear - this.formed} years.
        \nWe sing ${this.genre}. Our first album was ${this.albums[0]["name"]} in  year ${this.albums[0].released}.`);
    }
};
theExpertiseWins.bandInfo();

function newCats (name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
        console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
}

const catOne = new newCats('Elfie', 'Aphrodite Giant', 'ginger');
const catTwo = new newCats('Bertie', 'Cymric', 'white',);

catOne.greeting();
catTwo.greeting();