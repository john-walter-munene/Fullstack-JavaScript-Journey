function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }

doubleAfter2Seconds(4).then(outcome => { console.log(outcome) });

let sum =   doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30);
console.log(sum) // undefined

function addPromise(x){
    return new Promise(resolve => {
      doubleAfter2Seconds(10).then((a) => {
        doubleAfter2Seconds(20).then((b) => {
          doubleAfter2Seconds(30).then((c) => {
            resolve(x + a + b + c);
          })
        })
      })
    });
  }

async function addAsync(number) {
    const [a, b, c] = [await doubleAfter2Seconds(10), await doubleAfter2Seconds(20), await doubleAfter2Seconds(30)];
    return number + a + b + c;
}

addAsync(11).then((sum) => {
    console.log(sum);
  });

addPromise(10).then((sum) => {
    console.log(sum);
  });

function confirmPromisesAll(integer) {
    let promiseOne = new Promise(resolve => {
        setTimeout(() => resolve(10 * 2), 2000);
    })

    let promiseTwo = new Promise(resolve => {
        setTimeout(() => resolve(20 * 2), 2000);
    })

    let promiseThree = new Promise(resolve => {
        setTimeout(() => resolve(30 * 2), 2000);
    })

    let sum = integer;

    let settledPromisesOutput = Promise.all([promiseOne, promiseTwo, promiseThree]).then(
        value => sum + value[0] + value[1] + value[2]
    );
    
    console.log(settledPromisesOutput);

    return settledPromisesOutput;
}

// confirmPromisesAll(10);

