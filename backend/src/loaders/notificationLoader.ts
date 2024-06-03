import { Container } from 'typedi';
import NotificationService from '../microservices/notificationService/notificationService';

const notificationLoader = () => {
  const notificationServiceInstance = Container.get(NotificationService);
  notificationServiceInstance.initialize();
  console.log('Notification service loaded');
};

export default notificationLoader;
