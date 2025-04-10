const someOrder = {
    items: [
        { name: 'Dragon Food', price: 8, quantity: 8, },
        { name: 'Dragon Cage (small)', price: 800, quantity: 1, },
        { name: 'Shipping', price: 40, shipping: true, },
    ]
}

const orderTotal = (order) => {
    const totalItems = order.items
        .filter(x => !x.shipping)
        .reduce((previous, current) => previous + (current.price * current.quantity) , 0);

    const shippingItem = order.items.find(x => !!x.shipping)

    const shipping = totalItems > 1000 ? 0 : shippingItem.price;

    return totalItems + shipping;
}

const result = orderTotal(someOrder);
console.log(result);