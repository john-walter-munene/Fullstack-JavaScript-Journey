if (orderTotal({
    items: [
        { name: 'Dragon Food', price: 8, quantity: 1, },
        { name: 'Dragon cage (small)', price: 800, quantity: 1, },
    ],
}) != 808) {
    throw new Error('Check fail: Happy path (Example 1)');
}

if (orderTotal({
    items: [
        { name: 'Dragon collar', price: 20, quantity: 1, },
        { name: 'Dragon chew toy', price: 40, quantity: 1, },
    ],
}) != 60) {
    throw new Error('Check fail: Happy path (Example 2)');
}

if (orderTotal({
    items: [
        { name: 'Dragon Candy', price: 2, quantity: 3, },
    ]
}) != 6) {
    throw new Error('Check fail: Quantity');
}

if (orderTotal({
    items: [
        { 'name': 'Dragon Candy', price: 3 },
    ]
}) !== 3) {
    throw new Error('Check fail: No quantity specified');
}

function orderTotal(order) {
    return order.items.reduce((previous, current) => previous + (current.price * (current.quantity || 1)), 0);
}