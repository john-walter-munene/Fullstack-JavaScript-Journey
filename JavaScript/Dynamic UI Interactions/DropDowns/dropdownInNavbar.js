// Selecting dropdown elements
let dropdown = document.querySelector('.dropdown');
let dropBtn = dropdown.querySelector('.dropbtn');
let dropContent = dropdown.querySelector('.dropdown-content');
let dropLinks = dropContent.querySelectorAll('a');

// Function to show/hide dropdown and handle link hover
function showDropDownOnHover(container, button, content, links) {
    // Show dropdown on hover
    container.addEventListener('mouseover', () => {
        content.style.display = 'block';
        button.style.backgroundColor = 'rgb(26, 231, 77)'; // Match CSS hover color
    });

    // Hide dropdown on mouseout
    container.addEventListener('mouseout', () => {
        content.style.display = 'none';
        button.style.backgroundColor = ''; // Reset to original color
    });

    // Handle link hover
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f1f1f1'; // Match CSS link hover color
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '#f9f9f9'; // Reset to original color
        });
    });
}

// Apply the function to the dropdown
showDropDownOnHover(dropdown, dropBtn, dropContent, dropLinks);