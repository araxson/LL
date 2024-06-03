import { Schema, model } from 'mongoose';

const EmailSchema = new Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Email = model('Email', EmailSchema);

export default Email;
