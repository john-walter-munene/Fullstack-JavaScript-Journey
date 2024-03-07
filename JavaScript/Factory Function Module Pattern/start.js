let globalAge = 23;

function printAge(age) {
    var varAge = 34;

    if (age > 0) {
        const constAge = age * 2;
        console.log(constAge);
    }

}

function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
      // "second" is scoped within the resulting function
      const second = secondNumber;
      return first + second;
    }
  }
  // but we've not seen an example of a "function"
  // being returned, thus far - how do we use it?
  
const add5 = makeAdding(5);
console.log(add5(2)) // logs 7

// Comparing factory functions with constructors.

// A constructor.
const User = function (name) {
    this.name = name;
    this.discordName = `@${this.name}`;
}

// Refactoring my constructor to factory functions.
// No need for using "new"...
function createUser (name) {
    const discordName = `@${name}`;
    return {name, discordName};
}

const name = "Bob";
const age = 28;
const color = "red";

console.log({name, age, color});

const thatObject = {name, age, color};

function createUser(name) {
    const discordName = `@${name}`;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser('Josh');

josh.giveReputation();
josh.giveReputation()

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation(),
})