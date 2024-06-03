import { Request, Response } from 'express';
import { Payment } from '../../models/Payment';

export const getPayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createPayment = async (req: Request, res: Response) => {
  const { amount, userId, status } = req.body;
  try {
    const payment = new Payment({ amount, userId, status, createdAt: new Date() });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json({ message: 'Payment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
