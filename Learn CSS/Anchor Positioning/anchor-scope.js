const toggle = document.getElementById('apply-scope');
const wrapper = document.getElementById('wrapper');

toggle.addEventListener('input', (event)=>{
  if(event.target.checked) wrapper.style.setProperty('--anchor-scope','--image');
  else  wrapper.style.setProperty('--anchor-scope','none');
});