const popover = document.getElementById('my-popover');

const hoverButton = document.getElementById('hoverPopover');

hoverButton.addEventListener('mouseover', ()=>{
  popover.showPopover({source: hoverButton});
})
hoverButton.addEventListener('mouseout', ()=>{
  popover.hidePopover();
})

const input = document.getElementById('input');
input.addEventListener('input', e=>{
  if(e.target.value === 'show'){
    popover.showPopover();
  } else if(e.target.value === 'hide'){
    popover.hidePopover();
  }
});