function sumInput() {
    let myArray = [];
    let limit = Infinity;
    for (let counter = 0; counter < limit; counter++) {
        let yourInput = prompt("Please enter a number", 0); 
        let sum = 0;
        if (typeof yourInput !== "number" || yourInput ==="" || typeof yourInput === undefined) {
            for (const item of myArray) {
                sum += myArray[item];
            }
            alert(sum);
            break;
        } else {
            myArray.push(yourInput);
            continue;
        };
    }
}

sumInput();