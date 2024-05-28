class Entity {
    constructor(name, attackDamage, health) {
        this.name = name;
        this.attackDamage = attackDamage;
        this.health = health;
    }

    move() {
        console.log(`${this.name} moved.`);
    }

    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage}`);
        targetEntity.takeDamage(this.attackDamage);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has has ${this.health} remaining.`);
    }
}

class Character extends Entity { }

class Wall extends Entity {
    constructor(name, health) {
        super(name, 0, health);
    }

    move() { return null }

    attack() { return null }
}

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name, attackDamage, -1);
    }

    move() { return null }

    takeDamage() { return null }
}

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);

console.log('');

// Solution. Break the code into smaller components (Interfaces).
class NewEntity {
    constructor(name) {
        this.name = name;
    }
}

const mover = {
    move() {
        `${this.name} moved.`;
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage}`);
        targetEntity.takeDamage(this.attackDamage);
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has has ${this.health} remaining.`);
    }
}

class NewCharacter extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class NewWall extends NewEntity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

Object.assign(NewWall.prototype, hasHealth);

class NewTurret  extends NewEntity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(NewTurret.prototype, attacker);

const newTurret = new NewTurret('Turret', 5);
const newCharacter = new NewCharacter('Character', 3, 100);
const newWall = new NewWall('Wall', 200);

newTurret.attack(newCharacter);
newCharacter.move();
newCharacter.attack(newWall);