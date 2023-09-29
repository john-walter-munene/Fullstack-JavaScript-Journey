const unOrderedList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function runInResponse() {
    let currentInput = input.value;
    input.value = '';

    let newListItem = document.createElement('li');
    const newListItemText = document.createElement('span');
    const itemButton = document.createElement('button');

    newListItem.appendChild(newListItemText);
    newListItemText.textContent= currentInput;
    newListItem.appendChild(itemButton);
    itemButton.textContent = 'Delete';
    unOrderedList.appendChild(newListItem);

    itemButton.addEventListener('click', () => {
        unOrderedList.removeChild(newListItem);
    });

    input.focus();
};

button.addEventListener('click', runInResponse);