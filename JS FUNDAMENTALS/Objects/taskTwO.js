let bandInfo;

// Add your code here
function Band(name) {
    this.name = name;
    this.nationality = 'Kenyans';
    this.genre = 'Drill Music';
    this.members = 5;
    this.formed = 2020;
    this.split = null;
    this.albums = [
        {   name: 'East Mpaka London', released: 2021,  },
        {   name: 'Githurai Town Anarchy', released: 2022},
    ]
}

let myBand = new Band('Midway Master');

bandInfo = `Hello! Call us ${myBand.name}. We are ${myBand.nationality}, and have been active for ${2023 - parseInt(myBand.formed)} years. Our style is ${myBand.genre}. Check out our first title "${myBand.albums[0].name}", released in ${myBand.albums[0].released}.`;

// Don't edit the code below here!
const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);