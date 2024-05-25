const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;
    let kittens = 0;

    // Add your code here
    let catsArray = JSON.parse(catString);

    for (let catCount = 0; catCount < catsArray.length; catCount++) {
        if (catCount === catsArray.length -1) {
            motherInfo += `and ${catsArray[catCount].name}.`;
        } else {
            motherInfo += `${catsArray[catCount].name}, `;
        }
    }

    for (const cat of catsArray) {
      let kittensArray = cat["kittens"];
      for (const kitten of kittensArray) {
        total++;
        kittens++;
        if (kitten["gender"] === "m") male++;
      }
    }

    let females = parseInt(kittens) - parseInt(male);

    kittenInfo = `There are ${kittens} kittens. Males are ${male} and Females ${females}`;
    
    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;

    section.appendChild(para1);
    section.appendChild(para2);

    return;
  }