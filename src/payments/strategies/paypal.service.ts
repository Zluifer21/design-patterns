import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from '../payment.inteface';

@Injectable()
export class PayPalPaymentStrategy implements PaymentStrategy {
  async pay(amount: number): Promise<string> {
    return `Paid ${amount} using PayPal`;
  }
}
