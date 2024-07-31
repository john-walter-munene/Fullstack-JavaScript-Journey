// Selecting dropdown elements
let leftDropdown = document.querySelector('.dropdown.left');
let leftDropBtn = leftDropdown.querySelector('.dropbtn');
let leftDropContent = leftDropdown.querySelector('.dropdown-content');
let leftDropLinks = leftDropContent.querySelectorAll('a');

let rightDropdown = document.querySelector('.dropdown.right');
let rightDropBtn = rightDropdown.querySelector('.dropbtn');
let rightDropContent = rightDropdown.querySelector('.dropdown-content');
let rightDropLinks = rightDropContent.querySelectorAll('a');

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

// Apply to left dropdown
showDropDownOnHover(leftDropdown, leftDropBtn, leftDropContent, leftDropLinks);

// Apply to right dropdown
showDropDownOnHover(rightDropdown, rightDropBtn, rightDropContent, rightDropLinks);