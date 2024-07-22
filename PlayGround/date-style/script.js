// Function to set the initial theme based on preference or default to 'dark'
function setInitialTheme() {
    const root = document.documentElement;
    const initialTheme = 'dark'; // Set your preferred initial theme here
    root.classList.add(initialTheme);
    console.log('Initial theme set to:', initialTheme);
}

// Toggle Application theme
function setTheme() {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    
    // Remove the current theme class and add the new theme class
    root.classList.remove(currentTheme);
    root.classList.add(newTheme);
    console.log('Theme toggled to:', newTheme);
}

// Add event listener to the theme toggle button
document.getElementById('themeToggleBtn').addEventListener('click', setTheme);

// Add shadow effect to the date input on click
const dateInput = document.getElementById('dateInput');
dateInput.addEventListener('click', function() {
    this.classList.add('shadowed');
    console.log('Date input shadow added');
});

// Optional: Remove shadow on blur
dateInput.addEventListener('blur', function() {
    this.classList.remove('shadowed');
    console.log('Date input shadow removed');
});

// Set the initial theme when the page loads
setInitialTheme();