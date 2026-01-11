# 💳 Stripe Payment Service (NestJS)

This module provides a complete **Stripe payment integration** using **NestJS**.  
It supports creating payment intents, confirming payments, refunds, checkout sessions, coupons, and webhooks.

The implementation is built using the official **Stripe Node SDK** and follows Stripe’s recommended practices.

---

## 📚 Official References

- Stripe Docs → https://docs.stripe.com/
- Stripe Testing Cards → https://docs.stripe.com/testing?testing-method=card-numbers#visa
- Stripe + NestJS Guide →  
  https://medium.com/@emmanuelodii80/how-to-setup-stripe-within-nestjs-application-61b7509a66dc

---

## 🧱 Features

- ✅ Create payment intents
- ✅ Confirm payment intents
- ✅ Create payment methods (test cards)
- ✅ Refund payments
- ✅ Create checkout sessions
- ✅ Handle Stripe webhooks
- ✅ Create coupons & discounts
- ✅ Supports test & live modes

---

###  API Flow Diagram (Optional but Professional)
Explain the payment lifecycle.

```md
## 🔄 Payment Flow

1. Client requests payment
2. Backend creates PaymentIntent
3. Client confirms payment
4. Stripe processes payment
5. Webhook confirms transaction
6. Backend updates order status


## ⚙️ Environment Variables

```env
STRIPE_SECRET=sk_test_xxxxxxxxxxxxxxxxx
STRIPE_HOOK_SECRET=whsec_xxxxxxxxxxxxxxx
SUCCESS_URL=http://localhost:3000/success
CANCEL_URL=http://localhost:3000/cancel
```
## 🧩 PaymentService Methods

### `createPaymentIntent()`
Creates a Stripe Payment Intent.

**Parameters:**
- `amount`: number (in major currency unit)
- `currency`: string (default: egp)

**Returns:**
- Stripe PaymentIntent object

---

## 📦 Installation

```bash
npm install stripe
```

---

## 🧠 PaymentService Implementation

```ts
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import type { Request } from "express";
import Stripe from "stripe";

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET as string);
  }

  async refund(id: string) {
    return await this.stripe.refunds.create({
      payment_intent: id,
    });
  }

  async retrievePaymentIntent(id: string) {
    const intent = await this.stripe.paymentIntents.retrieve(id);
    if (!intent) {
      throw new NotFoundException("Fail to find matching payment intent");
    }
    return intent;
  }

  async confirmPaymentIntent(id: string) {
    const intent = await this.retrievePaymentIntent(id);
    const confirm = await this.stripe.paymentIntents.confirm(intent.id, {
      payment_method: "pm_card_visa",
    });

    if (confirm.status !== "succeeded") {
      throw new BadRequestException("Fail to confirm this intent");
    }
    return confirm;
  }

  async createPaymentMethod(data = {
    type: "card",
    card: { token: "tok_visa" },
  }) {
    return await this.stripe.paymentMethods.create(data);
  }

  async createPaymentIntent(data, methodData) {
    const method = await this.createPaymentMethod(methodData);
    return await this.stripe.paymentIntents.create({
      amount: data.amount * 100,
      currency: data.currency || "egp",
      payment_method: method.id,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });
  }

  async webHook(req: Request) {
    const endpointSecret = process.env.STRIPE_HOOK_SECRET as string;
    const sig = req.headers["stripe-signature"];

    const event = this.stripe.webhooks.constructEvent(
      req.body,
      sig as string,
      endpointSecret
    );

    if (event.type !== "checkout.session.completed") {
      throw new BadRequestException("Fail to pay this session");
    }

    return event;
  }

  async createCoupon(data) {
    return await this.stripe.coupons.create(data);
  }

  async createSession(params) {
    return await this.stripe.checkout.sessions.create(params);
  }
}
```

---

## 🧪 Testing Cards

- Visa: `4242 4242 4242 4242`
- Token: `tok_visa`
- Payment Method: `pm_card_visa`

---

## 🔐 Webhook Testing

```bash
stripe listen --forward-to localhost:3000/webhook
```

---

## ✅ Summary

- Full Stripe integration with NestJS
- Secure payments & refunds
- Checkout sessions & coupons
- Webhook ready


## 🖥️ Frontend Integration (React / React Native)

This backend Stripe integration is designed to work seamlessly with **React**, **React Native**, or **Next.js** frontends.

The frontend **never handles secret keys**. All sensitive operations are handled on the backend.

---

## 🔑 Frontend Responsibilities

The frontend should:
- Collect user payment details
- Request a PaymentIntent from backend
- Confirm payment using Stripe SDK
- Handle success and failure UI states

---

## 📦 Frontend Dependencies

### React / Next.js
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### React Native (Expo)
```bash
expo install expo-stripe
```

---

## 🧩 Example: React (Web) Payment Flow

### 1️⃣ Load Stripe
```ts
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY!
);
```

---

### 2️⃣ Create Payment Intent (API Call)
```ts
export async function createPaymentIntent(amount: number) {
  const res = await fetch("http://localhost:3000/payments/create-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount })
  });

  return await res.json();
}
```

---

### 3️⃣ Confirm Payment
```tsx
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    const { clientSecret } = await createPaymentIntent(500);

    const result = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!,
      },
    });

    if (result?.paymentIntent?.status === "succeeded") {
      alert("Payment Successful 🎉");
    }
  };

  return <CardElement />;
};
```

---

## 📱 Example: React Native (Expo)

```ts
import { useStripe } from "@stripe/stripe-react-native";

const { initPaymentSheet, presentPaymentSheet } = useStripe();

const openPaymentSheet = async () => {
  const { clientSecret } = await fetchBackend();

  await initPaymentSheet({
    paymentIntentClientSecret: clientSecret,
  });

  await presentPaymentSheet();
};
```

---

## 🔐 Security Rules (IMPORTANT)

- ❌ Never expose `STRIPE_SECRET_KEY` on frontend
- ✅ Use Stripe public key only
- ✅ Always validate payments via webhook
- ❌ Never trust frontend payment status

---

## 🔔 Webhook Usage with Frontend

Frontend flow ends after payment confirmation.  
Backend webhook confirms final payment status:

```txt
payment_intent.succeeded → Order marked as PAID
payment_intent.payment_failed → Order marked as FAILED
```

---

## 🧪 Frontend Testing Cards

| Card | Number |
|----|----|
| Visa | 4242 4242 4242 4242 |
| Declined | 4000 0000 0000 9995 |

Expiry: Any future date  
CVC: Any 3 digits

---

## ✅ Best Practice Summary

- Backend creates & confirms intents
- Frontend only confirms payment
- Webhooks are source of truth
- Use Stripe Elements / Payment Sheet

---
