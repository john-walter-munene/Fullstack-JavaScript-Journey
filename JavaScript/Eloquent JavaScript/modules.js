const weekDay = (function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return {
        name(number) { return names[number]; },
        number(name) { return names.indexOf(name); },
    };
})();

console.log(weekDay.name(weekDay.number("Sunday"))); // Sunday
console.log('');

// Evaluating strings as a code
const x = 1;

function evalAndReturnX(code) {
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x = 2")); // → 2
console.log(x); // → 1

// Using the function constructor
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4)); // 5
console.log('');

// ECMAScript modules
import ordinal from "ordinal";
import {days, months} from "date-names";
export function formatDate(date, format) { /* ... */ }
export default ["Winter", "Spring", "Summer", "Autumn"];
import {days as dayNames} from "date-names"; 
console.log(dayNames.length); // → 7
console.log('');

const {find_path} = require("dijkstrajs");

let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
        edges[dest] = 1;
    }
}

console.log(find_path(graph, "Post Office", "Cabin")); // → ["Post Office", "Alice's House", "Cabin"]