// First, define the callback function that will execute when the DOM changes
function callBack(mutations) {
    // Some code here.
}

// Second, create a MutationObserver object and pass the callback into the MutationObserver() constructor:
let observer = new MutationObserver(callBack);

// Third, call the observe() method to start observing the DOM changes.
observer.observe(targetNode, observerOptions);

// Finally, stop observing the DOM changes by calling the disconnect() method:
observer.disconnect()

// Mutation Observer options.
let options = {
    childList: true,
    attributes: true,
    characterData: false,
    subtree: false,
    attributeFilter: ['attr1', 'attr2'],
    attributeOddValue: false,
    characterOddValue: false,
}