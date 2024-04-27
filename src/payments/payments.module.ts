import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PayPalPaymentStrategy } from './strategies/paypal.service';
import { CreditCardPaymentStrategy } from './strategies/credit-card.service';

@Module({
  controllers: [PaymentsController],
  providers: [
    CreditCardPaymentStrategy,
    PayPalPaymentStrategy,
    PaymentsService,
  ],
})
export class PaymentsModule {}
