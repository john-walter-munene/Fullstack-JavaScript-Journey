function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0);
  }

function orderTotal(order) {
    return order.items.reduce((prev, cur) => {
        const itemTotal = cur.price * (cur.quantity || 1);
        return prev + itemTotal;
    }, 0);
}

  
module.exports = orderTotal;