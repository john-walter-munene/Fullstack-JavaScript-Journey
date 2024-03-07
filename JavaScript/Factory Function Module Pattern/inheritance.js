// ES6
class Greeter {
    constructor (name) {
      this.name = name || 'John Doe';
    }
    hello () {
      return `Hello, my name is ${ this.name }`;
    }
  }
  
const george = new Greeter('George');
const msg = george.hello(); 
console.log(msg);

//ES5
function OldGreeter (name) {
    this.name = name || 'John Doe';

}

OldGreeter.prototype.hello = function hello () {
    return `Hello, my name is ${this.name}`;
}

var oldGeorge = new OldGreeter('George');

console.log(oldGeorge.hello());

// Factory function.
const proto = {
    hello() {
        return `Hello, my name is ${this.name}`;
    }
}

const greeter = (name) => Object.assign(Object.create(proto));
const factoryGreeter = greeter('George');
const factoryMessage = factoryGreeter.hello();

// Cloning objects.
const protoTwo = {
    hello: function hello () {
        return `Hello, my name is ${this.name}`;
    }
};

const walter = Object.assign({}, protoTwo, {name: "Walter"});
const waltersMessage = walter.hello();
console.log(waltersMessage);

// Functional inheritance.
import Events from 'eventemitter3';

const rawMixin = function () {
  const attrs = {};

  return Object.assign(this, {
    set (name, value) {
      attrs[name] = value;

      this.emit('change', {
        prop: name,
        value: value
      });
    },

    get (name) {
      return attrs[name];
    }
  }, Events.prototype);
};

const mixinModel = (target) => rawMixin.call(target);

const georgeTwo = { name: 'george' };
const model = mixinModel(georgeTwo);

model.on('change', data => console.log(data));

model.set('name', 'Sam');
/*
{
  prop: 'name',
  value: 'Sam'
}
*/