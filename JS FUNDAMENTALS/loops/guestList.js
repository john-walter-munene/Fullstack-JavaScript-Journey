const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
const admittedPersons = [];
const refusedPersons = [];

for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
        refusedPersons.push(person);
    } else {
        admittedPersons.push(person)
    }
}

console.log(admittedPersons);
console.log(refusedPersons);

let j = 0;

while (j <= admittedPersons.length -1) {
    if (j === admittedPersons.length -1) {
        admitted.textContent += `and ${admittedPersons[j]}.`;
    } else {
        admitted.textContent += `${admittedPersons[j]}, `
    }
    j++;
}

do {
    if (j === refusedPersons.length - 1) {
        refused.textContent += `and ${refusedPersons[j]}.`;
    } else {
        refused.textContent += `${refusedPersons[j]}, `;
    }
    j++
} while (j < refusedPersons.length);