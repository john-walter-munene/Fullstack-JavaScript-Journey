const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
console.log(cats);

function toUpperString(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpperString)
console.log(upperCats);

function lCat(cat) {
    return cat.startsWith('L');
}

const filtered = upperCats.filter(lCat);
console.log(filtered, cats.filter(lCat));