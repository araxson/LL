import { Schema, model } from 'mongoose';

const NotificationSchema = new Schema({
  message: { type: String, required: true },
  userId: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Notification = model('Notification', NotificationSchema);

export default Notification;
