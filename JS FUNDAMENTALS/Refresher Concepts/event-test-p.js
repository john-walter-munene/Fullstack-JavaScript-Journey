document.addEventListener('keydown', event => {
    var element = document.querySelector('p');

    // Set Variables for keydown codes.
    var a = 'KeyA';
    var s = 'KeyS';
    var d = 'KeyD';
    var w = 'KeyW';

    // Set direction for each code
    switch(event.code) {
        case a: 
                element.textContent = 'Left';
                break;
        case s:
                element.textContent = 'Down';
                break;
        case d:
                element.textContent = 'Right';
                break;
        case w:
                element.textContent = 'Up';
                break;
    }

});