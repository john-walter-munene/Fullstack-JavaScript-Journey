function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
console.log(sum.apply(null, numbers)); // 6

/* Syntax

myFunction(a, ...iterableObject, b) 
[1, ...iterableObject, '4', 'five', 6 ]
{...obj, key: 'value'}

*/ 

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// Peplacing Apply()
function myFunction(x, y, z) {/*Do sth here...*/};
const args = [0, 1, 2];
myFunction.apply(null, args);

// Using the spread syntax
function myFunctionTwo(x, y, z) {/*som code here */};
const argsTwo = args;
myFunctionTwo(...argsTwo);

function myFunctionThree(v, w, x, y, z) {}
const argsThree = [0, 1];
myFunction(-1, ...argsThree, 2, ...[3]);

// Apply for new operator.
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);

// Powerfull array literals.
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

// A better way to concatenate arrays.

let arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];

arr5 = [...arr3, ...arr4];

// Append all items from arr2 onto arr1
arr3 = arr3.concat(arr4);
// When using spread syntax.
function arraysEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
  
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  
    return true;
  }
  
// Confirm arr3 and arr5 contents are the same
console.log(arraysEqual(arr3, arr5)); // This should return true

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
console.log(mergedObj);

// Conditionally adding properties to an object.
const isSummer = true;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
console.log(fruits);

// Spread sytax does no trigger setters.
const objectAssign = Object.assign(
    {
      set foo(val) {
        console.log(val);
      },
    },
    { foo: 1 },
  );
  // Logs "1"; objectAssign.foo is still the original setter
  
  const spread = {
    set foo(val) {
      console.log(val);
    },
    ...{ foo: 1 },
  };
  // Nothing is logged; spread.foo is 1

  const obj3 = { foo: "bar", x: 42 };
const obj4 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj3, obj4);
// { foo: 'baz', x: 42, y: 13 }
