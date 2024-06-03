import { IResolvers } from 'graphql-tools';
import { Payment } from '../../../models/Payment';

const paymentResolvers: IResolvers = {
  Query: {
    getPayment: async (_: any, { id }: { id: string }) => {
      const payment = await Payment.findById(id);
      if (!payment) {
        throw new Error('Payment not found');
      }
      return payment;
    },
    getPayments: async () => {
      return await Payment.find();
    },
  },
  Mutation: {
    createPayment: async (_: any, { input }: { input: any }) => {
      const payment = new Payment({ ...input, createdAt: new Date() });
      await payment.save();
      return payment;
    },
    updatePayment: async (_: any, { id, input }: { id: string, input: any }) => {
      const payment = await Payment.findByIdAndUpdate(id, input, { new: true });
      if (!payment) {
        throw new Error('Payment not found');
      }
      return payment;
    },
    deletePayment: async (_: any, { id }: { id: string }) => {
      const payment = await Payment.findByIdAndDelete(id);
      if (!payment) {
        throw new Error('Payment not found');
      }
      return payment;
    },
  },
};

export default paymentResolvers;
