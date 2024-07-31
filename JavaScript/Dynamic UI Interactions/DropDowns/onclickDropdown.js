// Function to toggle the dropdown visibility
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Event listener for the dropdown button
const dropButton = document.querySelector('.dropbtn');

dropButton.addEventListener('click', () => {
    myFunction();
});

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (event) => {
    const dropdown = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn') && !dropdown.contains(event.target)) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});