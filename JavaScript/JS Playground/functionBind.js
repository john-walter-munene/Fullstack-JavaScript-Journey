const moduleOne = {
    x: 42,
    getX: function () {
      return this.x;
    },
};
  
const unboundGetX = moduleOne.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(moduleOne);
console.log(boundGetX());
// Expected output: 42

const boundFn = fn.bind(thisArg, arg1, arg2);
const boundFnTwo = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs);

