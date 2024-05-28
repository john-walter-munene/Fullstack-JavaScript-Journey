class Monster {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name} attacked.`);
    }

    walk() {
        console.log(`${this.name} walked.`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flew.`);
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam.`);
    }
}

const bear = new Monster('bear');
bear.walk();
bear.attack();
console.log('');

const eagle = new FlyingMonster('eagle');
eagle.walk();
eagle.attack();
eagle.fly();

// Composition over inheritance.
console.log("Using composition");

function attackerAndWalker({ name }) {
    return {
        attack: () => console.log(`${name} attacked.`),
        walk: () => console.log(`${name} walked.`),
    };
}

function swimmer({ name }) {
 return {
    swim: () => console.log(`${name} swam.`),
 };
}

function flyer({ name }) {
    return {
       fly: () => console.log(`${name} flew.`),
    };
   }

function swimmingMonsterCreator(name) {
    const monster = {
        name,
    }

    return { ...monster, ...swimmer(monster), ...attackerAndWalker(monster), };
}

const walter = swimmer({ name: 'Walter'});
walter.swim();

const newSwimmer = swimmingMonsterCreator('Munene');
newSwimmer.swim();


function swimmingFlyingMonsterCreator(name) {
    const monster = {
        name,
    }

    return { ...monster, 
        ...swimmer(monster), 
        ...flyer(monster),
    ...attackerAndWalker(monster), };
}
const hybridMonster = swimmingFlyingMonsterCreator('John');
hybridMonster.fly();
hybridMonster.swim();
hybridMonster.attack();
hybridMonster.walk();