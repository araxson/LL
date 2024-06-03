import { Schema, model } from 'mongoose';

const AdSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Ad = model('Ad', AdSchema);

export default Ad;
