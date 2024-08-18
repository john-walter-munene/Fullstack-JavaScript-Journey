async function asyncFunc() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                    resolve("Done after 3 seconds");
        }, 3000)
    })

    let result = await promise;
    console.log(result);
    return result;
}

asyncFunc();
console.log("Program running in synch waiting asyc task");

// Error handling.
// This code.
async function f() {
    await Promise.reject(new Error("Whoops!"));
  }

// ...is the same as this.
async function f() {
    throw new Error("Whoops!");
  }

// Catching an error using Catch.
async function errorCatchingFunction() {
    try {
        let response = await fetch('http://no-such-url');
        let user = await response.json()
    } catch(error) {
        alert(error);
    }
}

errorCatchingFunction();

