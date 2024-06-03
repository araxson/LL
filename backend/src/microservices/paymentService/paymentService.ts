import { Service } from 'typedi';
import Payment from './paymentModel';

@Service()
class PaymentService {
  async createPayment({ amount, userId, status }) {
    const payment = new Payment({ amount, userId, status });
    return await payment.save();
  }

  async getPayments(userId) {
    return await Payment.find({ userId });
  }

  async initialize() {
    // Any initialization code for the payment service
    console.log('Payment service initialized');
  }
}

export default PaymentService;
