// reduce/reduceRight.
let arr = [1, 2, 3, 4, 5];
let results = arr.reduce((sum, current) => sum + current);
console.log(results);

console.log(Array.isArray(arr), Array.isArray([]), Array.isArray({}));

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];

let soldiers = users.filter(army.canJoin, army);
console.log(soldiers);

let soldersAdded = users.filter(user => army.canJoin(user));
console.log(soldersAdded);

// https://javascript.info/array-methods