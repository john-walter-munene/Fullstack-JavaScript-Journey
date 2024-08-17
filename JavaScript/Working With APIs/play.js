function delay(ms) {
    // your code
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(), ms);
    }) 

    return promise;
  }
  
  delay(3000).then(() => console.log('runs after 3 seconds'));