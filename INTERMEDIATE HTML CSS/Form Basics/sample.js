const name = document.querySelector('#username');
const greetMeButton = document.querySelector('.greet-btn');
const greetingOutput = document.querySelector('.greeting');

greetMeButton.addEventListener('click', (event) => {
    greetingOutput.textContent = `Hello, ${name.value}`;
})