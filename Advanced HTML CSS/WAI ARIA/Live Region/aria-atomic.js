/* basic JavaScript to update the clock */
function updateClock() {
    const now = new Date();
    document.getElementById("clock-hours").textContent = now.getHours();
    document.getElementById("clock-mins").textContent =
      `0${now.getMinutes()}`.substr(-2);
}
  
/* first run */
updateClock();
  
/* update every minute */
setInterval(updateClock, 60000); 

function change(event) {
    const yearOut = document.getElementById("year-output");
  
    switch (event.target.id) {
      case "year":
        yearOut.textContent = event.target.value;
        break;
      default:
        return;
    }
}  