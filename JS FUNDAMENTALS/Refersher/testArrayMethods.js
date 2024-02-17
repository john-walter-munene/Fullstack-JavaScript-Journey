function camelize(str) {
    let myArray = str.split("-");

    let newString = myArray[0];

    for (let j = 1; j < myArray.length; j++) {
        let capitalizedLetter = myArray[j].slice(0, 1).toUpperCase();
        let smallLetters = myArray[j].slice(1);
        let camelizedName = capitalizedLetter + smallLetters;
        newString += camelizedName;
    };

    return newString;
}

camelize("background-color-in-javascript");
camelize("john-walter-munene-njeru-goldenstar9521");

function filterRange(arr, a, b) {
    let filteredNumbers = arr.filter(item => (item >= a && item <= b));
    return filteredNumbers;
}


function filterRangeInPlace(arr, a, b) {
    for (let j = arr.length - 1; j >= 0; j--) {
        let currentValue = arr[j];

        if (currentValue > b || currentValue < a) {
            arr.splice(j, 1);
        };
    }
}

let myArray = [5, 2, 1, -10, 8];
function sortArray(a, b) {
    return b - a;
}
myArray.sort(sortArray);

let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(array) {
    return array.slice().sort();
}
let sorted = copySorted(arr);

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

let john = { name: "John", age: 25, surname: "Smith", id: 1 };
let pete = { name: "Pete", age: 30, surname: "Hunt", id: 2 };
let mary = { name: "Mary", age: 28, surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let userNames = users.map(user => user.name);

let usersMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id,
}));

function sortByAge(arr) {

}