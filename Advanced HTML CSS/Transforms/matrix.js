var e = "";
var style = "";
e = document.getElementById("myBox");
style = window.getComputedStyle(e).getPropertyValue("transform");
document.getElementById("output").innerText=style;