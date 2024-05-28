// Create Order
// Order module definition
var orderModule = (function() {
    var module = {},
        deliveries = myApp.deliveryModule;

    module.createOrder = function(orderData) {
        var orderResult;

        orderResult = // Code to actually create the order
        orderResult.estimatedDeliveryTime =    deliveries.getDeliveryTime(orderData);

        return orderResult;
    };

    return module;
})();

// Reducing coupling.
// Estimated delivery time using Pub/Sub pattern
document.addEventListener("DOMContentLoaded", function(event) {
    var orderModule = (function() {
        var orders = {},
            EST_DELIVERY = 'current estimated delivery time',
            estimatedDeliveryTime;

        PubSub.subscribe(EST_DELIVERY, function(msg, data) {
            console.log(msg);
            estimatedDeliveryTime = data;
        });

        return orders;
    })();

    var deliveryModule = (function() {
        var deliveries = {},
            EST_DELIVERY = 'current estimated delivery time';

        deliveries.getEstimatedDeliveryTime = function() {
            var estimatedDeliveryTime = 1; // Hard-coded to 1 hour, but likely an API call.

            PubSub.publish(EST_DELIVERY, estimatedDeliveryTime);
        };

        return deliveries;
    })();

    deliveryModule.getEstimatedDeliveryTime();
});