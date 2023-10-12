// Creating objects in JS.
let userOne = {
    name: 'Walter',
    age: 30,
    // multiword properties be quoted.
    "likes birds": true,
};
// Add new property.
console.log(userOne);
userOne.isAdmin = true;

// Delete existing property.
delete userOne.age;
console.log(userOne);

console.log(userOne["likes birds"]);

// Working with computed properties.
/*
let fruit = prompt("Which type fo ffuite do you want to buy?", 'apple');

let bag = {
    [fruit]: 5,
}
console.log(bag.apple);
*/
function makeUser(name, age) {
    return {
        name,
        age,
        // And more properties here...
    }
}

let userTwo = makeUser('John', 23);
console.log(userTwo.name, userTwo.age);
console.log("age" in userTwo);

let userThree = {
    name: 'John',
    age: 23,
    isAdmin: true,
};

for (key in userThree) {
    //console.log(key);
    console.log(userThree[key]);
}

// Ordered like an object.
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
  
for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }

let userFour = {
    name: "John",
    surname: "Smith"
  };

userFour.age = 25; // add one more
  
// non-integer properties are listed in the creation order
for (let prop in userFour) {
    console.log( prop ); // name, surname, age
  }