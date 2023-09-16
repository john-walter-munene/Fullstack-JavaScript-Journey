// Function Declaration
function sum(a, b) {
    return a + b;
  }

  let age = 16; // take 16 as an example

  if (age < 18) {
    welcome();               // \   (runs)
                             //  |
    function welcome() {     //  |
      alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
                             //  |
    welcome();               // /   (runs)
  
  } else {
  
    function welcome() {
      alert("Greetings!");
    }
  }
  
  // Here we're out of curly braces,
  // so we can not see Function Declarations made inside of them.
  
  welcome(); // Error: welcome is not defined