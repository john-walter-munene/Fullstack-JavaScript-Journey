// METHODS...   
const obj = {
    foo: function () {
      // …
    },
    bar: function () {
      // …
    },
  };

// shortened to...
const objTwo = {
    foo() {
      // …
    },
    bar() {
      // …
    },
  };

const objThree = {
    a: "foo",
    b() {
      return this.a;
    },
  };
console.log(objThree.b()); // "foo"

// In classes...
class ClassWithPublicInstanceMethod {
    publicMethod() {
      return "hello world";
    }
    secondPublicMethod() {
      return "goodbye world";
    }
  }
  
const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod()); // "hello world"  

class BaseClass {
    msg = "hello world";
    basePublicMethod() {
      return this.msg;
    }
  }
  
class SubClass extends BaseClass {
    subPublicMethod() {
      return super.basePublicMethod();
    }
  }
  
const instanceTwo= new SubClass();
console.log(instanceTwo.subPublicMethod()); // "hello world"
 
// Computed prop names.
const bar = {
    foo0: function () {
      return 0;
    },
    foo1() {
      return 1;
    },
    ["foo" + 2]() {
      return 2;
    },
  };
  
console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
  
// Generator methods.
// Using a named property
const obj1 = {
    g: function* () {
      let index = 0;
      while (true) {
        yield index++;
      }
    },
  };
  
// The same object using shorthand syntax
  const obj2 = {
    *g() {
      let index = 0;
      while (true) {
        yield index++;
      }
    },
  };
  
const it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
 
// Sync methods.
// Using a named property
const obj3 = {
    f: async function () {
      await somePromise;
    },
  };
  
// The same object using shorthand syntax
const obj4 = {
    async f() {
      await somePromise;
    },
  };
  
// Async generator methods.
// Using a named property
const obj5 = {
    f: async function* () {
      yield 1;
      yield 2;
      yield 3;
    },
  };
  
// The same object using shorthand syntax
const obj6 = {
    async *f() {
      yield 1;
      yield 2;
      yield 3;
    },
  };
 
// GETTERS...
const objForGet = {
    log: ['a', 'b', 'c'],
    get latest() {
        return this.log[this.log.length - 1];
    },
};

console.log(objForGet.latest) // Expected output: "c".

const objForGetTwo = {
    get prop() {
        // Getter, the code that runs when reading objForGetTwo.prop
        return someValue;
    },
};

// Examples.
// On object initializers.
const objForGetThree = {
    log: ['example', 'latest'],
    get latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
    },
};

console.log(objForGetThree.latest) // "test"

// Using getters in classes.
class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
      return this.#msg;
    }
    set msg(x) {
      this.#msg = `hello ${x}`;
    }
  }
  
const instanceOne = new ClassWithGetSet();
console.log(instanceOne.msg); // "hello world"
  
instanceOne.msg = "cake";
console.log(instanceOne.msg); // "hello cake"
  
// Defining a getter on existing objects.
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)

// Using a computed name...
const expr = "foo";
const myObject = {
    get [expr] () {
        return "bar";
    }
};

console.log(obj.foo); // "bar"


// Static getters. 
class MyConstants {
    static get foo() {
      return "foo";
    }
  }
  
console.log(MyConstants.foo); // 'foo'
MyConstants.foo = "bar";
console.log(MyConstants.foo); // 'foo', a static getter's value cannot be changed

const objMine = {
    get notifier() {
      delete this.notifier;
      this.notifier = document.getElementById("bookmarked-notification-anchor");
      return this.notifier;
    },
  };
  
// get vs defineproperty.
class Example {
    get hello() {
      return "world";
    }
  }
  
const objExample = new Example();
console.log(objExample.hello);
// "world"
  
console.log(Object.getOwnPropertyDescriptor(objExample, "hello"));
// undefined
  
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),);
  // { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
 
  
// SETTERS...
const language = {
    set current(name) {
      this.log.push(name);
    },
    log: [],
  };
  
language.current = 'EN';
language.current = 'FA';
  
console.log(language.log);
// Expected output: Array ["EN", "FA"]
  
class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
      return this.#msg;
    }
    set msg(x) {
      this.#msg = `hello ${x}`;
    }
  }
  
const instanceOne = new ClassWithGetSet();
console.log(instanceOne.msg); // "hello world"
  
instanceOne.msg = "cake";
console.log(instanceOne.msg); // "hello cake"
  
// Removing a setter "delete" operator.
delete language.current;

// Defining a setter using define prop...
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5

const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5

// Using a computed name.
const exprNew = "foo";

const objSetterTest = {
  baz: "bar",
  set [exprNew](v) {
    this.baz = v;
  },
};

console.log(objSetterTest.baz); // "bar"

objSetterTest.foo = "baz";
// Run the setter

console.log(objSetterTest.baz); // "baz"

// PUBLIC CLASS FIELS...
class ClassWithField {
    instanceField;
    instanceFieldWithInitializer = "instance field";
    static staticField;
    static staticFieldWithInitializer = "static field";
  }

const PREFIX = "prefix";
class newClassWithField {
    field;
    fieldWithInitializer = "instance field";
    [`${PREFIX}Field`] = "prefixed field";
}

const example = new newClassWithField();
console.log(Object.hasOwn(example, "field")); // true
console.log(example.field); // undefined
console.log(example.fieldWithInitializer) // instance field
console.log(example.prefixField); // prefixed field

class C {
    [Math.random()] = 1;
  }
  
console.log(new C());
console.log(new C());
// Both instances have the same field name

class MyBase {
    baseField = "base field";
    anotherBaseField = this.baseField;
    baseMethod () {
        return "base method output";
    }
}

class MyDerived extends MyBase {
    subField = super.baseMethod();
}

const myBase = new MyBase();
const mySub = new MyDerived();

console.log(myBase.anotherBaseField); // base field
console.log(mySub.subField) // base method output

class J {
    obj = {};
}

const exampleOne = new J();
const exampleTwo = new J();
console.log(exampleOne.obj === exampleTwo.obj); // False.

class YourBase {
    constructor () {
        console.log("Base constructor", this.field);
    }
}

class YourDerived extends YourBase {
    field = 1;
    constructor () {
        super();
        console.log("Derived constructor", this.field)
        this.field = 2;
    }
}

const yourInstance = new YourDerived();
// Base constructor: undefined
// Derived constructor: 1
console.log(yourInstance.field); // 2

class FieldInitializersAccessThoseAbove {
    a = 1;
    b = this.c;
    c = this.a + 1;
    d = this.c + 1;
}

const accessInstance = new FieldInitializersAccessThoseAbove();
console.log(accessInstance.d, accessInstance.b); // 3, undefined.

// Field declarations in Derived classes do not invoke setters in base class.
class BaseToWatch {
    set field(val) {
        console.log(val);
    }
}

class DerivedToWatch extends BaseToWatch {
    field = 1;
}

const testTheBehavior = new DerivedToWatch(); // No log.

class DerivedWithConstructor extends BaseToWatch {
    constructor () {
        super ();
        this.field = 1;
    }
}

const testTheBehavior2 = new DerivedWithConstructor(); // Logs 1.

// Examples...
class Person {
    // All instances of Person will have the same name
    name = "Dragomir";
  }

class Person {
    name;
    age;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
class Person {
    name;
    age;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
class Professor extends Person {
    name = `Professor ${this.name}`;
  }
  
console.log(new Professor("Radev", 54).name); // "Professor Radev"
  
// STATIC..
class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
    static {
      console.log('Class static initialization block called');
    }
  }
  
console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."

// Syntax
class ClassWithStatic {
    static staticField;
    static staticFieldWithInitializer = value;
    static staticMethod() {
      // …
    }
  }

class ClassWithStaticField {
    static staticField;
    static staticFieldWithInitializer = "static field";
  }
  
class SubclassWithStaticField extends ClassWithStaticField {
    static subStaticField = "subclass field";
  }
  
console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.subStaticField); // "subclass field"
  
// This refers to current class
// Alternatively accessible through classname
class ClassWithStaticField {
    static baseStaticField = "base static field";
    static anotherBaseStaticField = this.baseStaticField;
  
    static baseStaticMethod() {
      return "base static method output";
    }
  }
  
class SubClassWithStaticField extends ClassWithStaticField {
    static subStaticField = super.baseStaticMethod();
  }
  
console.log(ClassWithStaticField.anotherBaseStaticField); // "base static field"
console.log(SubClassWithStaticField.subStaticField); // "base static method output"

// Exmaples.
// Using static members in classes.
class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
class SquaredTriple extends Triple {
    static longDescription;
    static description = "I square the triple of any number you provide";
    static calculate(n) {
      return super.calculate(n) * super.calculate(n);
    }
  }

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18 

const tp = new Triple();

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate()); // 'tp.calculate is not a function'

// Calling static members from another static method.
class StaticMethodCall {
    static staticProperty = "static property";
    static staticMethod() {
      return `Static method and ${this.staticProperty} has been called`;
    }
    static anotherStaticMethod() {
      return `${this.staticMethod()} from another static method`;
    }
  }

StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'
  
//  Calling static members from a class contsructor and other methods.
class StaticMethodCall {
    constructor() {
      console.log(StaticMethodCall.staticProperty); // 'static property'
      console.log(this.constructor.staticProperty); // 'static property'
      console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
      console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }
  
    static staticProperty = "static property";
    static staticMethod() {
      return "static method has been called.";
    }
  }

// PRIVATE PROPS...
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}

class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Cannot read private member #x from an object whose class did not declare it

class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return "obj must be an instance of C";
  }
}
console.log(C.getX(new C("foo"))); // "foo"
console.log(C.getX(new C(0.196))); // 0.196
console.log(C.getX(new C(new Date()))); // the current date and time
console.log(C.getX({})); // "obj must be an instance of C"

class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class Subclass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new Subclass(); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}

// Returning an overiding object.
class Stamper extends class {
  // A base class whose constructor returns the object it's given
  constructor(obj) {
    return obj;
  }
} {
  // This declaration will "stamp" the private field onto the object
  // returned by the base class constructor
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const stampedObj = {};
new Stamper(stampedObj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`

console.log(stampedObj); // In some dev tools, it shows {#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(stampedObj instanceof Stamper); // false

// You cannot stamp private properties twice
new Stamper(stampedObj); // Error: Initializing an object twice is an error with private fields

class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return ClassWithPrivateStaticField.#privateStaticField;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {}

Subclass.publicStaticMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it

class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    // When invoked through super, `this` still refers to Subclass
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {
  static callSuperMethod() {
    return super.publicStaticMethod();
  }
}

Subclass.callSuperMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it

class ClassWithPrivateMethod {
  #privateMethod() {
    return 42;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const privateInstance = new ClassWithPrivateMethod();
console.log(privateInstance.publicMethod()); // 42

// Private methods are not accessible on the prototype chain.
class C {
  #method() {}

  static getMethod(x) {
    return x.#method;
  }
}

console.log(C.getMethod(new C())); // [Function: #method]
console.log(C.getMethod(C.prototype)); // TypeError: Receiver must be an instance of class C

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod()); // 42

class NewClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return NewClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

console.log(NewClassWithPrivateStaticMethod.publicStaticMethod()); // 42

// Simulating private constructors.
class PrivateConstructor {
  static #isInternalConstructing = false;

  constructor() {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError("PrivateConstructor is not constructable");
    }
    PrivateConstructor.#isInternalConstructing = false;
    // More initialization logic
  }

  static create() {
    PrivateConstructor.#isInternalConstructing = true;
    const instance = new PrivateConstructor();
    return instance;
  }
}

new PrivateConstructor(); // TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}