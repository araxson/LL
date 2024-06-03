import { IResolvers } from 'graphql-tools';
import { Notification } from '../../../models/Notification';

const notificationResolvers: IResolvers = {
  Query: {
    getNotification: async (_: any, { id }: { id: string }) => {
      const notification = await Notification.findById(id);
      if (!notification) {
        throw new Error('Notification not found');
      }
      return notification;
    },
    getNotifications: async () => {
      return await Notification.find();
    },
  },
  Mutation: {
    createNotification: async (_: any, { input }: { input: any }) => {
      const notification = new Notification({ ...input, createdAt: new Date() });
      await notification.save();
      return notification;
    },
    updateNotification: async (_: any, { id, input }: { id: string, input: any }) => {
      const notification = await Notification.findByIdAndUpdate(id, input, { new: true });
      if (!notification) {
        throw new Error('Notification not found');
      }
      return notification;
    },
    deleteNotification: async (_: any, { id }: { id: string }) => {
      const notification = await Notification.findByIdAndDelete(id);
      if (!notification) {
        throw new Error('Notification not found');
      }
      return notification;
    },
  },
};

export default notificationResolvers;
