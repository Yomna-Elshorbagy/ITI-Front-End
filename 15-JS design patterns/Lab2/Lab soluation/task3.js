class CashPayment {
  pay(amount) {
    console.log(`Paid LE ${amount} in Cash`);
  }
}
class CreditCardPayment {
  pay(amount) {
    console.log(`Paid LE ${amount} using Credit Card`);
  }
}
class PayPalPayment {
  pay(amount) {
    console.log(`Paid LE ${amount} using PayPal`);
  }
}

class Checkout {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  processOrder(amount) {
    this.paymentMethod.pay(amount);
  }
}

let order1 = new Checkout(new PayPalPayment());
order1.processOrder(100);

let order2 = new Checkout(new CreditCardPayment());
order2.processOrder(250);

let order3 = new Checkout(new CashPayment());
order3.processOrder(50);
