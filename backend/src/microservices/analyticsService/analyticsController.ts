import { Request, Response } from 'express';
import AnalyticsService from './analyticsService';
import { Container } from 'typedi';

const analyticsServiceInstance = Container.get(AnalyticsService);

export const trackEvent = async (req: Request, res: Response) => {
  const { event, properties } = req.body;
  try {
    await analyticsServiceInstance.trackEvent(event, properties);
    return res.status(200).json({ message: 'Event tracked successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
