function removeDuplicate(array) {
    // Exit if this is not an array.
    if (!Array.isArray(array)) return;

    let duplicateFreeArray = [];
    for (let counter = 0; counter < array.length; counter++) {
        let currentItem = array[counter];
        if (!duplicateFreeArray.includes(currentItem)) duplicateFreeArray.push(currentItem);
    }

    return duplicateFreeArray;
}