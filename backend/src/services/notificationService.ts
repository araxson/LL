import { Service } from 'typedi';
import NotificationRepository from '../repositories/notificationRepository';
import { INotification } from '../interfaces/INotification';

@Service()
class NotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  async createNotification(notification: INotification): Promise<INotification> {
    return await this.notificationRepository.createNotification(notification);
  }

  async getNotifications(): Promise<INotification[]> {
    return await this.notificationRepository.getNotifications();
  }

  async getNotificationById(id: string): Promise<INotification | null> {
    return await this.notificationRepository.getNotificationById(id);
  }

  async updateNotification(id: string, notification: Partial<INotification>): Promise<INotification | null> {
    return await this.notificationRepository.updateNotification(id, notification);
  }

  async deleteNotification(id: string): Promise<INotification | null> {
    return await this.notificationRepository.deleteNotification(id);
  }
}

export default NotificationService;
