function getPowerIterative(number, base) {
    let result = 1;

    for (let counter = 0; counter < base; counter++) {
        result *= number; 
    }

    return result;
}

console.log(getPowerIterative(2, 3)); // 8

function getPowerRecursive(number, base) {
    if( base == 1) return number;
    else return number * getPowerRecursive(number, base - 1);
}

console.log(getPowerRecursive(2, 3)); // 8

function shortGetPowerRecursive(number, base) {
    return (base == 1) ? number : number * getPowerRecursive(number, base - 1); 
}

console.log(shortGetPowerRecursive(2, 4)) // 16

let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }

console.log(sumSalaries(company));

let linkedList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

let alternativeLinkedList = { value: 1 };
alternativeLinkedList.next = { value: 2 };
alternativeLinkedList.next.next = { value: 3 };
alternativeLinkedList.next.next.next = { value: 4 };
alternativeLinkedList.next.next.next.next = null;

let secondLinkedList = linkedList.next.next;
console.log(secondLinkedList);
linkedList.next.next = null;
linkedList.next.next = secondLinkedList;

// Prepend the new value to the list.
linkedList = { value: "New item", next: linkedList };
linkedList.next = linkedList.next.next;
console.log(linkedList.next);