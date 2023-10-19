// get average age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(array) {
    return array.reduce((sum, current) => sum + current.age, 0) / array.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28)

// Filter unique array members
let strings =  ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];

function uniqueArray(array) {
    let uniqueMembers = [];
    for (const item of array) {
        if (!uniqueMembers.includes(item)) {
            uniqueMembers.push(item);
        }
    }
    return uniqueMembers;
}

console.log(uniqueArray(strings));

// above code works fine, but potential problems...Many comparisons if items are many and unique.

// Create a keyed object from array.
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

let usersById = groupById(users);

function groupById(array) {
   let groupedUsers = {};
   for (const item of array) {
        groupedUsers[item.id] = item;
   }

   return groupedUsers;
}

console.log(usersById);