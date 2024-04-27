import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from '../payment.inteface';

@Injectable()
export class CreditCardPaymentStrategy implements PaymentStrategy {
  async pay(amount: number): Promise<string> {
    return `Paid ${amount} using credit card`;
  }
}
