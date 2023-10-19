// Map to objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user) => ({
    fullName:  `${user.name} ${user.surname}`,
    id: user.id
}));

console.log(usersMapped);

// Sort users by age.
let johnOne = { name: "John", age: 25 };
let peteOne = { name: "Pete", age: 30 };
let maryOne = { name: "Mary", age: 28 };

let arr = [johnOne, peteOne, maryOne];

function sortByAge(users) {
    users.age.sort((a, b) => a.age - b.age);
}

// Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
let arrTwo = [1, 2, 3];
shuffle(arrTwo);
console.log(arrTwo);

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };


for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }

// Since the method above isn't reliable...
function shuffleTwo(array) {
    for (let j = array.length -1; j > 0; j--) {
        let i = Math.floor(Math.random * (j + 1));
        [array[j], array[i] = [array[i]], array[j]];
    }
}


// counts of appearances for all possible permutations
let countTwo = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffleTwo(array);
    countTwo[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }