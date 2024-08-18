let myPromise = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num < 5) {
        resolve("You've guessed correctly!")
    } else {
        reject("Better luck next time...")
    }
  });

function handleSuccess(goodNews) {
      console.log(goodNews)
  }

function handleFailure(badNews) {
      console.log(badNews)
  }

/* Invoke the promise and *then* pass in our resolve and reject functions */
// myPromise.then(handleSuccess, handleFailure);
// myPromise.then(handleSuccess).catch(handleFailure);

const randomResponse = async () => {
    let message = ''
    let num = Math.floor(Math.random() * 10) + 1;
    if (num < 5 ){
        message = await ('You guessed correctly!');
        console.log(message);
    } else {
        message = await ('Better luck next time...');
        console.log(message);
  }
} 

randomResponse()

const arrayOfFruits = ['banana', 'strawberry', 'papaya'];

arrayOfFruits.forEach(async fruit => {
    let message = "Would you like a " + fruit + "?"
    console.log(message)
})

const img = document.querySelector('img');

async function getCats() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_ke=0cvagHFFWB3Iwao4Xz4m3VWvThsNlNK8&s=cats', {mode: 'cors'});
        const catData = await response.json()
        img.src = catData.data.images.original.url;  
    } catch (error) {
        console.log(error)
        img.src = "logo.png"
    }
}

getCats()