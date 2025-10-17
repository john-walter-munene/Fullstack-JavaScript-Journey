const save = document.getElementById("save");

save.addEventListener("click", () => {
  save.setAttribute("disabled", "disabled");
  save.innerText = "Saving...";
  
  setTimeout(() => {
    save.removeAttribute("disabled");
    save.innerText = "Save";
  }, 3000);
});
