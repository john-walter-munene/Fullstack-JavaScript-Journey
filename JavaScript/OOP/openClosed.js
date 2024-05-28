//  Code should be open for extention but closed to modification.

class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

const standardVehicle = new Vehicle(10, 15);
console.log(standardVehicle.getRange()); // Outputs '150'

// Bad example, violates the rule.
class NewVehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        let range = this.fuelCapacity * this.fuelEfficiency;

        if (this instanceof HybridVehicle) {
            range += this.electricRange;
        }

        return range;
    }
}

class HybridVehicle extends NewVehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }
}

const hybridVehicle = new HybridVehicle(10, 15, 50);
console.log(hybridVehicle.getRange()); // Outputs '200'

// Best approach. Overide existing methods.
class LatestVehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class LatestHybridVehicle extends LatestVehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }
    getRange() {
        return (super.getRange() + this.electricRange);
    }
}

const latestVehicle = new LatestVehicle(10, 15);
const latestHybridVehicle = new LatestHybridVehicle(10, 15, 50);

console.log(latestVehicle.getRange()); // 150
console.log(latestHybridVehicle.getRange()) // 200