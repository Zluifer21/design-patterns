export interface PaymentStrategy {
  pay(amount: number): Promise<string>;
}
