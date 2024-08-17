// Writing Promises using async/await.
// A substitution for start.js
const imageViewer = document.getElementById('gif');
const imageSearcher = document.querySelector('.search-bar img');
const imageSearcherInput = document.querySelector('#search');

async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&s=cats', {mode: 'cors'});
    const catData = await response.json();
    imageViewer.src = catData.data.images.original.url;
    imageViewer.style.display = 'inline-block';
}

async function getAppropriateGif() {
    const userInput = imageSearcherInput.value;
    console.log("running in background");
    try {
        const apiResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
            { mode: 'cors'});
        const apiResponseData = await apiResponse.json();
        if (apiResponseData.data && apiResponseData.data.length > 0) {
            let imagePath = apiResponseData.data[0].images.original.url;
            imageViewer.src = imagePath;
            imageViewer.style.display = 'inline-block';
            console.log("Image now available")
        } else throw new Error("Gif not found!")
    } catch(error) {
        console.log(error);
        alert(error);
    }
}

getCats();
imageSearcher.addEventListener('click', () => getAppropriateGif());