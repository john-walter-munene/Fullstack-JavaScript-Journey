// compose function to combine multiple lambdas (functions)
function compose(...lambdas) {
    if (lambdas.length === 0) {
      return () => null;
    } else if (lambdas.length === 1) {
      return lambdas[0];
    } else {
      return (n) => lambdas[0](compose(...lambdas.slice(1))(n));
    }
  }
  
// carbonation function to handle modular checks and return values
function carbonation(modulus, printableForm) {
    let i = 0;
    return (n) => {
      i = (i + 1) % modulus;
      return i === 0 ? printableForm : n;
    };
  }
  
  // Applying compose with carbonation for FizzBuzz logic
const fizzBuzz = [...Array(100).keys()].map(
    compose(
      carbonation(15, "FizzBuzz"),
      carbonation(5, "Buzz"),
      carbonation(3, "Fizz")
    )
  );
  
  // Print the result as a space-separated string
console.log(fizzBuzz.join(" ")); 