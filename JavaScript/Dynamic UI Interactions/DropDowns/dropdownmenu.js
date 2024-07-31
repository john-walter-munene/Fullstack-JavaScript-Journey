// dropdownmenu.js

let overallContainer = document.querySelector('.dropdown');
let dropDownActivateButton = document.querySelector('.dropbtn');
let dropDownContent = document.querySelector('.dropdown-content');
let dropDownLinks = document.querySelectorAll('.dropdown-content a');

function showDropDownOnHover(container, button, content, links) {
    container.addEventListener('mouseover', () => {
        content.style.display = 'block';
        button.style.backgroundColor = '#3e8e41';
    });

    container.addEventListener('mouseout', () => {
        content.style.display = 'none';
        button.style.backgroundColor = '#4CAF50';
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f1f1f1';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '#f9f9f9';
        });
    });
}

showDropDownOnHover(overallContainer, dropDownActivateButton, dropDownContent, dropDownLinks);