// Specialized loops for collections.

// map()

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {
  console.log(cat);
}

// Specialized loops for collections.
function toUpper(string) {
    return string.toUpperCase();
};

const upperCats = cats.map(toUpper);
console.log(upperCats);

// filter()

function lCat(cat) {
    return cat.startsWith('L');
}

const filtered = cats.filter(lCat);
console.log(filtered);

