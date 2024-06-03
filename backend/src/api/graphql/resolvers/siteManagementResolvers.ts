import { IResolvers } from 'graphql-tools';
import { SiteManagement } from '../../../models/SiteManagement';

const siteManagementResolvers: IResolvers = {
  Query: {
    getSiteSettings: async () => {
      const settings = await SiteManagement.findOne();
      if (!settings) {
        throw new Error('Site settings not found');
      }
      return settings;
    },
  },
  Mutation: {
    updateSiteSettings: async (_: any, { input }: { input: any }) => {
      let settings = await SiteManagement.findOne();
      if (!settings) {
        settings = new SiteManagement({ ...input, updatedAt: new Date() });
      } else {
        settings = await SiteManagement.findByIdAndUpdate(settings.id, input, { new: true });
      }
      await settings.save();
      return settings;
    },
  },
};

export default siteManagementResolvers;
