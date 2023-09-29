const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World.");
btn.addEventListener('click', function (e) {
    console.log(e.target.style.background = 'blue');
    btn.textContent = 'Clicked';
  });

const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
    alert("Hello World");
});

function alertFunction () {
    alert("YAY! YOU DID IT!");
}