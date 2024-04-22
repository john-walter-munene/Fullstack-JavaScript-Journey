let object = {
    get propName() {
        // getter, code executed on getting object.propName.
    },

    set propName(value) {
        // setter, code executed on setting object.propName = value.
    },
}

let developer = {
    name: "John Walter Munene",
    surname: "Njeru", 

    get fullName () {
        return `${this.name} ${this.surname}`;
    },

    set fullName (value) {
        [this.name, this.surname] = value.split(" ");
    },
}

developer.fullName = "Munene Njeru";
console.log(developer.name);
console.log(developer.surname);

let user = {
    name: "John",
    surname: "Smith",
}

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName);
for (let key in user) {
    console.log(key);
}

// Smarter getters and setters.
let programmer = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters.");
            return;
        }
        this._name = value;
    }
}

programmer.name = "Walter";
console.log(programmer.name);
programmer.name = "";

// Using for compatibility.
function User(name, age) {
    this.name = name;
    this.age = age;
  }
  
let john = new User("John", 25);
console.log( john.age ); // 25

function newUser(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // Age calculated from current date and birthday.
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let newJohn = new newUser("John", new Date(2000, 11, 15));
console.log(newJohn.age);