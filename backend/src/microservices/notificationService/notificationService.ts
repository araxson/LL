import { Service } from 'typedi';
import Notification from './notificationModel';

@Service()
class NotificationService {
  async createNotification({ message, userId }) {
    const notification = new Notification({ message, userId });
    return await notification.save();
  }

  async getNotifications(userId) {
    return await Notification.find({ userId });
  }

  async initialize() {
    // Any initialization code for the notification service
    console.log('Notification service initialized');
  }
}

export default NotificationService;
