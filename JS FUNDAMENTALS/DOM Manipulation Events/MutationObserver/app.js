(function () {
    // selecting the list
    let list = document.querySelector('#language');

    // selecting the buttons
    let btnAdd = document.querySelector('#btnAdd');
    let btnRemove = document.querySelector('#btnRemove');
    let btnStart = document.querySelector('#btnStart');

    // disable the stop button
    let btnStop = document.querySelector('#btnStop');
    btnStop.disabled = true;

    function log(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                console.log(mutation);
            }
        }
    }

    let observer = new MutationObserver(log);

    btnStart.addEventListener('click', function () {
        observer.observe(list, {
            childList: true
        });

        btnStart.disabled = true;
        btnStop.disabled = false;
    });

    btnStop.addEventListener('click', function () {
        observer.disconnect();

        // Set the button state
        btnStart.disabled = false;
        btnStop.disabled = true;
    });

    let counter = 1;
    btnAdd.addEventListener('click', function () {
        // create a new item element
        let item = document.createElement('li');
        item.textContent = `Item ${counter++}`;

        // append it to the child nodes of list
        list.appendChild(item);
    });

    btnRemove.addEventListener('click', function () {
        list.lastElementChild ?
            list.removeChild(list.lastElementChild) :
            console.log('No more child node to remove');
    });

})();