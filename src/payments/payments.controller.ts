import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentDto } from './dto/payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('make-payment')
  makePayment(
    @Body(new ValidationPipe({ transform: true })) paymentRequest: PaymentDto,
  ): Promise<string> {
    try {
      const { amount, paymentType } = paymentRequest;
      return this.paymentsService.makePayment(amount, paymentType);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
