const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=> {
    para.textContent = "Output: ";
    const num = input.value;
    input.value = '';
    input.focus();
    for (let j = 1; j <= num; j++) {
        let sqRoot = Math.sqrt(j);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        para.textContent += `${j} `;
    }
});