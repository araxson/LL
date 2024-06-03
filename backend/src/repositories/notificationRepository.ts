import Notification from '../models/Notification';
import { INotification } from '../interfaces/INotification';

class NotificationRepository {
  async createNotification(notification: INotification): Promise<INotification> {
    const newNotification = new Notification(notification);
    return await newNotification.save();
  }

  async getNotifications(): Promise<INotification[]> {
    return await Notification.find();
  }

  async getNotificationById(id: string): Promise<INotification | null> {
    return await Notification.findById(id);
  }

  async updateNotification(id: string, notification: Partial<INotification>): Promise<INotification | null> {
    return await Notification.findByIdAndUpdate(id, notification, { new: true });
  }

  async deleteNotification(id: string): Promise<INotification | null> {
    return await Notification.findByIdAndDelete(id);
  }
}

export default NotificationRepository;
