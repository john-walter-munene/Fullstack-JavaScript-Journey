class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100}`);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class PayPal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with PayPal.`)
    }
}

class PayPalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.payPal = new PayPal();
    }

    pay(amountInDollars) {
        this.payPal.makePayment(this.user, amountInDollars);
    }
}

const store = new Store(new StripePaymentProcessor('John'));
const storeTwo = new Store(new PayPalPaymentProcessor('Munene'))
store.purchaseBike(2);
store.purchaseHelmet(2);
storeTwo.purchaseBike(2);
storeTwo.purchaseHelmet(2);