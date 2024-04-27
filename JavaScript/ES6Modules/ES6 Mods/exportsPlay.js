// export features declared elsewhere
export { myFunction2, myVariable2 };

// export individual features (can export var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() {
  // …
}

// export feature declared elsewhere as default
export { myFunction as default };
// This is equivalent to:
// export default myFunction;

// /modules/my-module.js
