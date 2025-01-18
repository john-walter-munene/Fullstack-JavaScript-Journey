class Base {
    static baseProp = "base";
}
  
class Derived extends Base {
    static derivedProp = "derived";
}
  
const BoundDerived = Derived.bind(null);
console.log(BoundDerived.baseProp); // "base"
console.log(BoundDerived.derivedProp); // undefined
console.log(new BoundDerived() instanceof Derived); // true
  
// Transforming methods to utility functions
// const slice = Array.prototype.slice;
// // ... Wont work.
// slice.call(arguments);

// Same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);
// ...

slice(arguments);
