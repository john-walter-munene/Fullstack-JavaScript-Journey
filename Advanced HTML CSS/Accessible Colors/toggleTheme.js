// Select the button
const btn = document.querySelector(".btn-toggle");

// Apply saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

// Listen for a click on the button (if it exists)
btn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  // Save the theme choice
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});