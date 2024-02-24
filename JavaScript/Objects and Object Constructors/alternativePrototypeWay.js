const person = {
    name: "Lydia",
    age: 21,
}

const walter = Object.create(person);
console.log(walter.prototype === person.prototype);
console.log(walter);