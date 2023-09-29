const container = document.querySelector('#container');

const content = document.createElement('h1');
content.classList.add('content');
content.textContent = "This is a glorious text content!";

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red";
container.appendChild(para);

const headerThree = document.createElement('h3');
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = 'blue';
container.appendChild(headerThree);

// Create a box for new elements.
const boxContiner = document.createElement('div');
boxContiner.classList.add('box-container');
boxContiner.style['border'] = "3px solid black";
boxContiner.style['backgroundColor'] = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const paraTwo = document.createElement('p');
paraTwo.textContent = "ME TOO!";
boxContiner.appendChild(h1);
boxContiner.appendChild(paraTwo);
container.appendChild(boxContiner);

