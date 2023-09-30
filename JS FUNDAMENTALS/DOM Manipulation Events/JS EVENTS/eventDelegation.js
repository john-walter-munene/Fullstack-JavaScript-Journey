const menu = document.querySelector('#menu');

menu.addEventListener('click', (event)=>{
    let target = event.target;

    switch (target.id) {
        case 'home':    console.log('Home menu item clicked');
                        break;
        case 'dashboard':   console.log('Dashboard menu was clicked'); 
                            break;
        case 'report':  console.log('Report menu item was clicked');
    };
});