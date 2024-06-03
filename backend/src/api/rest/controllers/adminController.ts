import { Request, Response } from 'express';
import { Admin } from '../../models/Admin';

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createAdmin = async (req: Request, res: Response) => {
  const { email, name, role } = req.body;
  try {
    const admin = new Admin({ email, name, role, createdAt: new Date() });
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json({ message: 'Admin deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
