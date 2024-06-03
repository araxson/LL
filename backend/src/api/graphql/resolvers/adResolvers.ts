import { IResolvers } from 'graphql-tools';
import { Ad } from '../../../models/Ad';
import { User } from '../../../models/User';

const adResolvers: IResolvers = {
  Query: {
    getAd: async (_: any, { id }: { id: string }) => {
      const ad = await Ad.findById(id);
      if (!ad) {
        throw new Error('Ad not found');
      }
      return ad;
    },
    getAds: async () => {
      return await Ad.find();
    },
  },
  Mutation: {
    createAd: async (_: any, { input }: { input: any }) => {
      const user = await User.findById(input.userId);
      if (!user) {
        throw new Error('User not found');
      }
      const ad = new Ad({ ...input, createdAt: new Date() });
      await ad.save();
      return ad;
    },
    updateAd: async (_: any, { id, input }: { id: string, input: any }) => {
      const ad = await Ad.findByIdAndUpdate(id, input, { new: true });
      if (!ad) {
        throw new Error('Ad not found');
      }
      return ad;
    },
    deleteAd: async (_: any, { id }: { id: string }) => {
      const ad = await Ad.findByIdAndDelete(id);
      if (!ad) {
        throw new Error('Ad not found');
      }
      return ad;
    },
  },
};

export default adResolvers;