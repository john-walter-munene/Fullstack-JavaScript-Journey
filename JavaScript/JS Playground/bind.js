"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6

class Base {
    constructor(...args) {
      console.log(new.target === Base);
      console.log(args);
    }
  }
  
const BoundBase = Base.bind(null, 1, 2);

new BoundBase(3, 4); // true, [1, 2, 3, 4]

class BaseTwo {}
const BoundBaseTwo = BaseTwo.bind(null, 1, 2);
console.log(new BaseTwo() instanceof BoundBaseTwo); // true

