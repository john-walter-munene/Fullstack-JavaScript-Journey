let colorHolder = Array.from(document.querySelectorAll('.wrapper.three .box'));
colorHolder.forEach(color => {
    color.style['background-color'] = color.textContent;
})
