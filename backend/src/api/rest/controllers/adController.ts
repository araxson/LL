import { Request, Response } from 'express';
import { Ad } from '../../models/Ad';
import { User } from '../../models/User';

export const getAd = async (req: Request, res: Response) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAds = async (req: Request, res: Response) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createAd = async (req: Request, res: Response) => {
  const { title, description, price, userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const ad = new Ad({ title, description, price, userId, createdAt: new Date() });
    await ad.save();
    res.status(201).json(ad);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateAd = async (req: Request, res: Response) => {
  try {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteAd = async (req: Request, res: Response) => {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json({ message: 'Ad deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
