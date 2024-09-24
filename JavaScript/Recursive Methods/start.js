// Iterative thinking.
function power(x, n) {
    let result = 1;

    // multiply result by x n times in the loop.
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log("Iteration: ", power(2, 3));

// Recursive thinking.
function recursivePower(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * recursivePower(x, n - 1);
    }
}

// Using conditional operator.
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

console.log("Recursion: ", recursivePower(2, 3));

// Recursive Travesals.
let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

// Function to sum things up...
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

// Linked list.
// let arr = [obj1, obj2, obj3];

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

// Alternative creation of a linked list.
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

let secondList = list.next.next;
list.next.next = null;
list.next.next = secondList;

// prepend the new value to the list
list = { value: "new item", next: list };


// Remove a value from the list.
list.next = list.next.next;

