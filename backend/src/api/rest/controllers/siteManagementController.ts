import { Request, Response } from 'express';
import { SiteManagement } from '../../models/SiteManagement';

export const getSiteSettings = async (req: Request, res: Response) => {
  try {
    const settings = await SiteManagement.findOne();
    if (!settings) {
      return res.status(404).json({ message: 'Site settings not found' });
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSiteSettings = async (req: Request, res: Response) => {
  try {
    let settings = await SiteManagement.findOne();
    if (!settings) {
      settings = new SiteManagement({ ...req.body, updatedAt: new Date() });
    } else {
      settings = await SiteManagement.findByIdAndUpdate(settings.id, req.body, { new: true });
    }
    await settings.save();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
