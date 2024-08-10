function getWeather() {
  return new Promise(function(resolve, reject) {
    setTimeout( () => {
      resolve('Rainy-a-little');
    }, 100)
  })
}

function getWeatherIcon(weather) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      switch(weather) {
        case 'Sunny':
          resolve('*__*');
          break;
        case 'Cloud':
          resolve('^__^');
          break;
        case 'Rainy':
          resolve('!-!');
          break;
        default:
          reject('NO ICON FOUND');
      }
    }, 100);
  })
}

function onSuccess(data) {
  console.log(`Success ${data}`)
}

function onError(data) {
  console.log(`Error: ${data}`)
}

getWeather()
  .then(getWeatherIcon)
  .then(onSuccess, onError);