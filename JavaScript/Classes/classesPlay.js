function Person (firstName, lastName) {
    var secret = "This is my secret";

    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;

    this.fullName = function () {
        return `${this.firstName} ${this.firstName}`;
    };

    this.setFirstName = function (firstName) {
        this.firstName = firstName;
    };

    this.setLastName = function (lastName) {
        this.lastName = lastName;
    };

    this.getSecret = function () {
        return secret;
    }
}

var personOne = new Person('John', 'Walter');
var personTwo = new Person('Munene', 'Njeru');
personOne.setFirstName('Goldstar');
console.log(personOne.firstName);

var personThree = new Person('Musembi', 'Programmer');
personThree.getSecret();

class NewPerson {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }
}

const newPersonOne = new NewPerson('John', 'Walter');
newPersonOne.fullName();

// Static methods...
class StaticPerson {
    static species() {
        return "Homo sapiens";
    }

    static speciesSentence() {
        return `Humans are classified as ${this.species().toLowerCase()}`;
    }

    static speciesProperty = "Homo sapiens";

    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }
}

const staticPerson = new StaticPerson('Bobby', 'Shmurda');
StaticPerson.species();
StaticPerson.speciesSentence();

// Extending classes...
class Worker extends StaticPerson {
    constructor(firstName, lastName, job) {
        super(firstName, lastName);
        this.job = job;
        this.hasJob = true;
    }

    setJob(job) {
        this.job = job;
    }

    biography() {
        const bio = `${this.fullName()} is a ${this.job}`.toUpperCase();
        return bio;
    }
}

const workerOne = new Worker('John', 'Walter', 'software developer');
workerOne.setJob('technical writer');
console.log(workerOne);

// Getters in classes.
class RobustWorker extends Worker {
    constructor(firstName, lastName, job, additionalRole) {
        super(firstName, lastName, job)
        this.additionalRole = additionalRole;
    }

    get newBiography() {
        const bio = `${this.fullName()} is a ${this.job} and a ${this.additionalRole}.`;
        return bio;
    }

    set setFullName(name) {
        name = name.split(' ');
        this.setFirstName(name[0]);
        this.setLastName(name[1]);
    }   
}

const superWorkerOne = new RobustWorker('John', 'Walter', 'software developer', 'technical writer');
superWorkerOne.setFullName = "Munene Njeru";
superWorkerOne.newBiography;