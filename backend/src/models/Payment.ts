import { Schema, model } from 'mongoose';

const PaymentSchema = new Schema({
  amount: { type: Number, required: true },
  userId: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Payment = model('Payment', PaymentSchema);

export default Payment;
