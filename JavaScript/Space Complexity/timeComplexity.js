const productList = [
    { name: 'Laptop', price: 18487 },
    { name: 'Keyboard', price: 356 },
    { name: 'Monitor', price: 8345 },
    // ...assuming 10000 more items here in between
    { name: 'Tablet', price: 9875 },
  ];
  
function lookupPrice (name, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
        console.log(`Price of '${list[i].name}' is: ${list[i].price}`);
        break;
      }
    }
  }

lookupPrice('Monitor', productList);
// => OUTPUT: "Price of 'Monitor' is: 8345"

const numbers = [1, 2, 3, 4];
const letters = ['a', 'b'];

function printLists (listOne, listTwo) {
  for (let i = 0; i < listOne.length; i++) {
    console.log(listOne[i]);
  }

  for (let i = 0; i < listTwo.length; i++) {
    console.log(listTwo[i]);
  }
}

printLists(numbers, letters);

const drinks = ['water', 'coffee']
const persons = ['person 1', 'person 2', 'person 3', 'person 4']

// function recieves 2 different inputs, let's call them 'a' and 'b'
function servingDrinks(drinkList, personsList) {
  // iterates through input 'drinkList' -> O(a) Linear time
  for (let i = 0; i < drinkList.length; i++) {
    // iterates through input 'personsList' -> O(b) Linear time
    for (let j = 0; j < personsList.length; j++) {
      console.log(`Gives ${drinkList[i]} to ${personsList[j]}`)
    }
  }
}

servingDrinks(drinks, persons)

// End result for Big O => O (a * b)

/*
OUTPUT:
'Gives water to person 1'
'Gives water to person 2'
'Gives water to person 3'
'Gives water to person 4'
'Gives coffee to person 1'
'Gives coffee to person 2'
'Gives coffee to person 3'
'Gives coffee to person 4'
*/

const fruits = ["apple", "strawberry", "watermelon"]

// function recieves a single input
function printAndPair (arr) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  
  // declares variable -> O(1) Constant time
  const totalPairs = arr.length * arr.length
  // prints given value -> O(1) Constant time
  console.log('Estimated paired elements length:', totalPairs)

  // nested loop using the same array -> O(n ^ 2) Quadratic time
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      console.log(`${arr[j]} - ${arr[k]}`)
    }
  }
}

printAndPair(fruits)

// Big O total => O (n) + O(1) + O(1) + O(n ^ 2)

/*
OUTPUT:
'apple'
'strawberry'
'watermelon'

'Estimated paired elements length:' 9

'apple - apple'
'apple - strawberry'
'apple - watermelon'
'strawberry - apple'
'strawberry - strawberry'
'strawberry - watermelon'
'watermelon - apple'
'watermelon - strawberry'
'watermelon - watermelon'
*/

// Analyzing space complexity.
