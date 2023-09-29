// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// Use forEach() to iterate through each button.

buttons.forEach((button) => {
    // and for each we add an event listener.
    button.addEventListener('click', () => {
        alert(`I am button with id=${button.id}.`)
    })
})