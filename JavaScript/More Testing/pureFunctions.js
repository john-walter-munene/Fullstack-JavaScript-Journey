// Pure fuction example.
function priceAfaterTax(productPrice) {
    return (productPrice * 0.2) + productPrice;
}

// Impure function example.
let tax = 20;
function calculateTax(productPrice) {
    return (productPrice * (tax / 100) + productPrice);
}