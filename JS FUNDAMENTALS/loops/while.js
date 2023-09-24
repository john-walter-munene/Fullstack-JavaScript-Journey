const cars = ["Crown", "Mark-X", "Mazda-Saloon"];

let myFavoriteCars = " My cars are called: ";

let j = 0;

while (j < cars.length) {
    if (j === cars.length - 1) {
        myFavoriteCars += `and ${cars[j]}`;
    } else {
        myFavoriteCars += `${cars[j]} `;
    }
    j++;
} 
console.log(myFavoriteCars);

