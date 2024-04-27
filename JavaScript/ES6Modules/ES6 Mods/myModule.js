// module "my-module.js"
function cube(x) {
    return x * x * x;
  }
  
const foo = Math.PI + Math.SQRT2;
  
const graph = {
    options: {
      color: "white",
      thickness: "2px",
    },
    draw() {
      console.log("From graph draw function");
    },
  };
  
export { cube, foo, graph };

// Fallback for my module
// module "my-module.js"

export default function cube(x) {
    return x * x * x;
  }  

// /modules/my-module.js
const a = 1;
export { a as "a-b" };
