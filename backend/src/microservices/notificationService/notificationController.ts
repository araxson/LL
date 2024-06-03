import { Request, Response } from 'express';
import NotificationService from './notificationService';
import { Container } from 'typedi';

const notificationServiceInstance = Container.get(NotificationService);

export const createNotification = async (req: Request, res: Response) => {
  const { message, userId } = req.body;
  try {
    const notification = await notificationServiceInstance.createNotification({ message, userId });
    return res.status(201).json(notification);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getNotifications = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const notifications = await notificationServiceInstance.getNotifications(userId);
    return res.status(200).json(notifications);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
