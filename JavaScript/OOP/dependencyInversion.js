//  High level code should never depend on low level interfaces and,
// Should also use abstractions. 
// Code docoupling.

class PurchaseHandler {
    processPayment(paymentDetails, amount) {
        // Complicated, PayPal specific logic goes here
        const paymentSuccess = PayPal.requestPayment(paymentDetails, amount);

        if (paymentSuccess) {
            // Do something
            return true;
        }

        // Do something
        return false;
    }
}

class BestPurchaseHandler {
    processPayment(paymentDetails, amount) {
        const paymentSuccess = BestPaymentHandler.requestPayment(
            paymentDetails,
            amount,
        );

        if (paymentSuccess) {
            // Do stuff
            return true;
        }

        // Do stuff
        return false;
    }
}

class BestPaymentHandler {
    requestPayment(paymentDetails, amount) {
        // Complicated, Paypal specific logic goes here.
        return PayPal.requestPayment(paymentDetails, amount);
    }
}