const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', event => {
    output.textContent = `You pressed ${event.key}`;
})

const x = 1;

function a() {
    const y = 2;
    outputValue(z);
}

function b() {
    const z = 3;
    outputValue(y);
}

function outputValue(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = `Value: ${value}`;
}

outputValue(x);
a();
b();