function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

const jeff = new Person('Jeff', 33);  

jeff.sayName();

// Factory function.
const PersonFactory = (name, age) => {
    const sayHello = () => console.log("Hello!");

    return { name, age, sayHello };
};

const jeffFactory = PersonFactory('Jeff', 27);

jeffFactory.sayHello();

const nameM = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log({nameM, color, number, food});

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };
  
const taco = FactoryFunction('taco');
taco.printString();

const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };

const counter = counterCreator();

counter();
counter();
counter();
counter();

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);