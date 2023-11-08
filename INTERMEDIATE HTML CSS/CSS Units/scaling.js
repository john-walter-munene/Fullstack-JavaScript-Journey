
let myRange = document.querySelector('input');
myRange.addEventListener('input', ()=>{
    const html = document.querySelector('html')
    html.style.fontSize = myRange.value + 'px'
  })