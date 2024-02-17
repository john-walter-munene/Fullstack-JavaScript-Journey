function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser('John', 23);
console.log(user);

function makeUserTwo(name, age) {
    return {
        name,
        age,
    };
}

let userTwo = makeUserTwo('John', 23);
console.log(userTwo);