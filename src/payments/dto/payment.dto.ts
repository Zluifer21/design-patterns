import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { PaymentType } from '../enums/payment.enum';

export class PaymentDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(PaymentType)
  paymentType: PaymentType;
}
