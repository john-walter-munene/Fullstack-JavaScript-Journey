const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.jpeg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is Cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is Cool, ${storedName}`;
}

myButton.addEventListener('click', setUserName);