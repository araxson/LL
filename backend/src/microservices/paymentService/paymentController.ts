import { Request, Response } from 'express';
import PaymentService from './paymentService';
import { Container } from 'typedi';

const paymentServiceInstance = Container.get(PaymentService);

export const createPayment = async (req: Request, res: Response) => {
  const { amount, userId, status } = req.body;
  try {
    const payment = await paymentServiceInstance.createPayment({ amount, userId, status });
    return res.status(201).json(payment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getPayments = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const payments = await paymentServiceInstance.getPayments(userId);
    return res.status(200).json(payments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
