import { cube, foo, graph } from "./myModule";

graph.options = {
    color: "blue",
    thickness: "3px",
  };

graph.draw(); // Logs "From graph draw function"
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888