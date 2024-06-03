import Payment from '../models/Payment';
import { IPayment } from '../interfaces/IPayment';

class PaymentRepository {
  async createPayment(payment: IPayment): Promise<IPayment> {
    const newPayment = new Payment(payment);
    return await newPayment.save();
  }

  async getPayments(): Promise<IPayment[]> {
    return await Payment.find();
  }

  async getPaymentById(id: string): Promise<IPayment | null> {
    return await Payment.findById(id);
  }

  async updatePayment(id: string, payment: Partial<IPayment>): Promise<IPayment | null> {
    return await Payment.findByIdAndUpdate(id, payment, { new: true });
  }

  async deletePayment(id: string): Promise<IPayment | null> {
    return await Payment.findByIdAndDelete(id);
  }
}

export default PaymentRepository;
