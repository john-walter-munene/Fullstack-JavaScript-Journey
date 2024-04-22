const PREFIX = "prefix";

class ClassWithField {
  field;
  fieldWithInitializer = "instance field";
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithField();
console.log(Object.hasOwn(instance, "field")); // true
console.log(instance.field); // undefined
console.log(instance.fieldWithInitializer); // "instance field"
console.log(instance.prefixField); // "prefixed field"

class Base {
    baseField = "base field";
    anotherBaseField = this.baseField;
    baseMethod() {
      return "base method output";
    }
  }
  
class Derived extends Base {
    subField = super.baseMethod();
}

const base = new Base();
const sub = new Derived();

console.log(base.anotherBaseField); // "base field"

console.log(sub.subField); // "base method output"
  
class C {
    a = 1;
    b = this.c;
    c = this.a + 1;
    d = this.c + 1;
  }
  
const instance3 = new C();
console.log(instance3.d); // 3
console.log(instance3.b); // undefined
  