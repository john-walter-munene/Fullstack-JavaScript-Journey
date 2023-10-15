let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
console.log( arr[1] ); // undefined
// now arr = ["I",  , "home"];
console.log( arr.length ); // 3
console.log(arr);

let arrOne = ["I", "study", "JavaScript"];
console.log(arrOne)
arrOne.splice(1, 1); // from index 1 remove 1 element
console.log( arrOne ); // ["I", "JavaScript"]

let arrTwo = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arrTwo.splice(0, 3, "Let's", "dance");
console.log(arrTwo);

// splice returns the array of removed elements
let arrTHree = ["I", "study", "JavaScript", "right", "now"];
let removed = arrTHree.splice(0, 2);
console.log(removed);

// Splice:  insert the elements without any removals
let arrFour = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arrFour.splice(2, 0, "complex", "language");
console.log( arrFour ); // "I", "study", "complex", "language", "JavaScript"

["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

myArray = ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

// Searching in an array.
let users = [
    {id: ['papa', 1], name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
let user = users.find(item => item.id['papa', 1] == 1);
console.log(user);

let usersOne = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
// Find the index of the first John
console.log(usersOne.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(usersOne.findLastIndex(user => user.name == 'John')); // 3

// Filter.
let someUsers = usersOne.filter(user => user.id < 3);
console.log(someUsers.length);

// Transform an array : MAP...
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// Sorting array items.
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
let unsortedArr = [ 1, 2, 15 ];
unsortedArr.sort(compareNumeric);
console.log(unsortedArr);  // 1, 2, 15

let names = 'John, Walter, Munene';
let namesArray = names.split(', ', 2);
for ( let name of namesArray) {
    console.log(name);
}

// Split into letters.
let str = "test";
console.log( str.split('') ); // t,e,s,t

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };

let usersThree = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
  ];
  
  // Find users for whom army.canJoin returns true
  let soldiers = usersThree.filter(army.canJoin, army);
  let soldiersTwo = usersThree.filter(user => army.canJoin(user));
  
  console.log(soldiers.length); // 2
  console.log(soldiers[0].age); // 20
  console.log(soldiers[1].age); // 23