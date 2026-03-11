const createUser = ({ firstName, lastName, email}) => ({
    firstName,
    lastName,
    email,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
});

const softwareDeveloper = createUser({ firstName: "John Walter", lastName: "Munene Njeru", email: "midwaymaster10@gmail.com"});
const technicalWriter = createUser({ firstName: "John Walter", lastName: "Munene Njeru", email: "midwaymaster10@gmail.com"});

console.log(softwareDeveloper.fullName()); // John Walter Munene Njeru
console.log(technicalWriter.fullName()); // John Walter Munene Njeru

console.log(softwareDeveloper);
console.log(technicalWriter);

// Used to create relatively complex and configurable objects
// Where values and keys are dependant on a certain environment or configuration
// Easily create new objects with custom keys and values

const createObjectFromArray = ([key, value]) => ({
    [key]: value,
}); 

let nameObj = createObjectFromArray(["John", "Walter"]);
console.log(nameObj); // { name: "John" }

// Cons
// In JavaScript, the factory pattern isn’t much more than a function that returns an object without using the new keyword.
// ES6 arrow functions allow us to create small factory functions that implicitly return an object each time.
// However, in many cases it may be more memory efficient to create new instances instead of new objects each time.

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});