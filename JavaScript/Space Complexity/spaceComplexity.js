const numbers = [1, 2, 3, 4, 5, 6];

function getTotal (arr) {
  // Declares variable - let total -> O(1)
  let total = 0

  // Declares variable - let i -> O(1)
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// Big O space complexity => O(1) + O(1) => O(2) = O(1) Constant
getTotal(numbers); // OUTPUT => 21

const guests = ['John', 'Jane', 'Adam', 'Olivia', 'Alan', 'Amy', 'Joe'];

function bookTables (list) {
  // Declares variable - let tables -> O(1)
  let tables = [];

  // Declares variable - let i -> O(1)
  for (let i = 0; i < list.length; i++) {
    // Pushes values based on the list length - O(n)
    tables.push(`Table ${i + 1} is reserved for ${list[i]}`);
  }

  return tables;
}

// Big O total => O(1) + O(1) + O(n)
// Big O space complexity after dropping constants => O(n) Linear

const bookedList = bookTables(guests);
console.log(bookedList);

/* OUTPUT:
[
  'Table 1 is reserved for John',
  'Table 2 is reserved for Jane',
  'Table 3 is reserved for Adam',
  'Table 4 is reserved for Olivia',
  'Table 5 is reserved for Alan',
  'Table 6 is reserved for Amy',
  'Table 7 is reserved for Joe'
]
*/

const unsortedNrs = [4,2,6,3,1,5,9,7,8,10]

const twoSumBrute = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] + list[j] === target) {
          return [i, j]
      }
    }
  }
}

console.log(twoSumBrute(unsortedNrs, 7));
// OUTPUT => [0, 3]

const twoSumHashmap = (list, target) => {
    const lookupTable = {}
    
    // build a lookup table
    for (let i = 0; i < list.length; i++) {
      lookupTable[list[i]] = i;
    }
    
    // iterate
    for (let j = 0; j < list.length; j++) {
      let diff = target - list[j]
      if (lookupTable[diff] && lookupTable[diff] !== j) {
        return [j, lookupTable[diff]];
      }
    }
  }
  
  console.log(twoSumHashmap(unsortedNrs, 7));
  // OUTPUT => [0, 3]

const twoSumUsingTwoPointers = (sortedNums, target) => {
    let left = 0;
    let right = sortedNums.length - 1;
    
    while (left < right) {
      let sum = sortedNums[left] + sortedNums[right];
      
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
twoSumUsingTwoPointers(sortedNrs, 7);