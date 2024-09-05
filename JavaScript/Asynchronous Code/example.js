function topPromise() {
    return new Promise((resolve, reject) => {
        const num = 9; // Change this to a non-number to trigger an error and back to number to correct
        if (typeof num === 'number') {
            resolve(num);
        } else {
            reject('Top promise failed: Input is not an integer');
        }
    });
}

function lowerPromise1(result) {
    return new Promise((resolve, reject) => {
        const errorCondition = false; // Set this to true to trigger an error
        if (errorCondition) {
            reject('Lower Promise 1 failed: Intentional error');
        } else {
            const sum = result + 10; // Adding 10 to the result
            resolve(sum);
        }
    });
}

function lowerPromise2(result) {
    return new Promise((resolve, reject) => {
        const errorCondition = false; // Set this to true to trigger an error
        if (errorCondition) {
            reject('Lower Promise 2 failed: Intentional error');
        } else {
            const sum = result + 20; // Adding 20 to the result
            resolve(sum);
        }
    });
}

function lowerPromise3(result) {
    return new Promise((resolve, reject) => {
        const errorCondition = false; // Set this to true to trigger an error
        if (errorCondition) {
            reject('Lower Promise 3 failed: Intentional error');
        } else {
            const sum = result + 30; // Adding 30 to the result
            resolve(sum);
        }
    });
}

topPromise()
    .then(result1 => lowerPromise1(result1))
    .then(result2 => lowerPromise2(result2))
    .then(result3 => lowerPromise3(result3))
    .then(finalResult => {
        console.log('All promises succeeded, final result:', finalResult);
    })
    .catch(error => {
        console.error('A promise failed:', error);
});