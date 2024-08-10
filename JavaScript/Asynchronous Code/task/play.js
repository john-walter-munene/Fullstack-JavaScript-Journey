const catsPromise = fetch("data/cats.json");
catsPromise.then(console.log(catsPromise));

catsPromise.then( response => response.json())
    .then(getThemCats);

function getThemCats(data) {
    console.log(data.cats);
}