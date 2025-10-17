const checkbox = document.querySelector("input");
const button = document.querySelector("button");
const square = document.querySelector(".square");

checkbox.addEventListener("change", ({ target }) => {
  if (checkbox.checked) {
    square.classList.add("has-transition");
  } else {
    square.classList.remove("has-transition");
  }
});