// const img = document.querySelector('img');
// const button = document.querySelector('button');

// let counter = 0;

// function fetchGif() {
//     fetch('https://api.giphy.com/v1/gifs/translate?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&s=cats', {mode: 'cors'})
//         .then(function(response) {
//             return response.json();
            
//         })
//         .then(function(response) {
//             let imagePath = response.data.images.original.url;
//             img.src = imagePath;
//             counter++
//             console.log(counter)
//         });
// }

// button.addEventListener('click', fetchGif);

// Optionally, load a GIF when the page loads:
// fetchGif();

const imageViewer = document.getElementById('gif');
const imageSearcher = document.querySelector('.search-bar img');
const imageSearcherInput = document.querySelector('#search');

function gifInitialLoad() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&s=cats', {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let imagePath = response.data.images.original.url;
            imageViewer.src = imagePath;
            imageViewer.style.display = 'inline-block';
        });
}

function findAppropriateGif() {
    let userInput = imageSearcherInput.value;
    console.log(userInput); 
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
        { mode: 'cors'})
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(response) {
            if (response.data && response.data.length > 0) {
                let imagePath = response.data[0].images.original.url;
                imageViewer.src = imagePath;
                imageViewer.style.display = 'inline-block';
            } else throw new Error('No GIFs Found');
        })
        .catch(error => {
            console.log('Error fetching GIF', error);
            alert(error);
        })
}

imageSearcher.addEventListener('click', () => findAppropriateGif());
gifInitialLoad();