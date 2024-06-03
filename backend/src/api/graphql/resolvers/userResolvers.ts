import { IResolvers } from 'graphql-tools';
import { User } from '../../../models/User';

const userResolvers: IResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    updateUser: async (_: any, { id, input }: { id: string, input: any }) => {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
  },
};

export default userResolvers;
