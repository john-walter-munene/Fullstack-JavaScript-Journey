const type = document.querySelector('ul');
type.addEventListener('change', (event) => {
    const example = document.querySelector('ol');
    example.setAttribute('style', `list-style-type: ${event.target.value}`);
})