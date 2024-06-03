import { Service } from 'typedi';
import PaymentRepository from '../repositories/paymentRepository';
import { IPayment } from '../interfaces/IPayment';

@Service()
class PaymentService {
  constructor(private paymentRepository: PaymentRepository) {}

  async createPayment(payment: IPayment): Promise<IPayment> {
    return await this.paymentRepository.createPayment(payment);
  }

  async getPayments(): Promise<IPayment[]> {
    return await this.paymentRepository.getPayments();
  }

  async getPaymentById(id: string): Promise<IPayment | null> {
    return await this.paymentRepository.getPaymentById(id);
  }

  async updatePayment(id: string, payment: Partial<IPayment>): Promise<IPayment | null> {
    return await this.paymentRepository.updatePayment(id, payment);
  }

  async deletePayment(id: string): Promise<IPayment | null> {
    return await this.paymentRepository.deletePayment(id);
  }
}

export default PaymentService;
