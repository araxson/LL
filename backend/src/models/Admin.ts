import { Schema, model } from 'mongoose';

const AdminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Admin = model('Admin', AdminSchema);

export default Admin;
