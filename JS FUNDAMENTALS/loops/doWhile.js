const cars = ["Crown", "Mark-X", "Mazda-Saloon"];

let myFavoriteCars = " My cars are called: ";

let j = 0;

do {
    if (j === cars.length - 1) {
        myFavoriteCars += `and ${cars[j]}`;
    } else {
        myFavoriteCars += `${cars[j]} `;
    }
    j++

} while (j < cars.length);

console.log(myFavoriteCars);

