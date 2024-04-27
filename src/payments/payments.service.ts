import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment.inteface';
import { CreditCardPaymentStrategy } from './strategies/credit-card.service';
import { PayPalPaymentStrategy } from './strategies/paypal.service';

@Injectable()
export class PaymentsService {
  makePayment(amount: number, paymentType: string) {
    const paymentStrategy = this.paymentStrategies.get(paymentType);
    if (!paymentStrategy) {
      throw new Error(`Payment method '${paymentType}' not supported`);
    }
    return paymentStrategy.pay(amount);
  }

  private paymentStrategies = new Map<string, PaymentStrategy>([
    ['creditCard', new CreditCardPaymentStrategy()],
    ['paypal', new PayPalPaymentStrategy()],
  ]);
}
