let user = {
    name: "John",
    surname: "Smith",
};

user.name = "Pete";
delete user.name;

console.log(user);

// Check for emptiness.
let schedule = {};

console.log(isEmpty(schedule)); // true.

schedule['8:30'] = "Get up.";
console.log(isEmpty(schedule)); // false

function isEmpty(object) {
    for (key in object) {
       return false;
    }
    return true;
}

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (key in salaries) {    
    sum += salaries[key]
}
console.log(sum);

// Multiply numeric values by 2...
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

console.log(menu);
function multiplyNumeric(object) {
    for (key in object) {
        if (typeof object[key] == 'number') {
            object[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);
