const obj = {name: "John", age: 30, city: "New York"};

const myJSON = JSON.stringify(obj);

console.log(typeof myJSON);

// Stringfy an array.
let myArray = ["John", "Peter", "Sally", "Jane"];
let myArrayJSON = JSON.stringify(myArray);

console.log(myArrayJSON);

// // Storing data.
// const myObj = {name: "John", age: 31, city: "New York"};
// const myObjJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myObjJSON);

// // Retreiving data.
// let text = localStorage.getItem("testJSON");
// let textObj = JSON.parse(text);
// console.log(textObj);

// Exceptions.
