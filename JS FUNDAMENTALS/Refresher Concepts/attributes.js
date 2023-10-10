const img = document.querySelector('img');

img.hasAttribute('src');                // returns true
img.getAttribute('src');                // returns "...shark.png"
img.removeAttribute('src');  

img.setAttribute('src', 'https://js-tutorials.nyc3.digitaloceanspaces.com/octopus.png');