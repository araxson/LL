import { IResolvers } from 'graphql-tools';
import { Admin } from '../../../models/Admin';

const adminResolvers: IResolvers = {
  Query: {
    getAdmin: async (_: any, { id }: { id: string }) => {
      const admin = await Admin.findById(id);
      if (!admin) {
        throw new Error('Admin not found');
      }
      return admin;
    },
    getAdmins: async () => {
      return await Admin.find();
    },
  },
  Mutation: {
    createAdmin: async (_: any, { input }: { input: any }) => {
      const admin = new Admin({ ...input, createdAt: new Date() });
      await admin.save();
      return admin;
    },
    updateAdmin: async (_: any, { id, input }: { id: string, input: any }) => {
      const admin = await Admin.findByIdAndUpdate(id, input, { new: true });
      if (!admin) {
        throw new Error('Admin not found');
      }
      return admin;
    },
    deleteAdmin: async (_: any, { id }: { id: string }) => {
      const admin = await Admin.findByIdAndDelete(id);
      if (!admin) {
        throw new Error('Admin not found');
      }
      return admin;
    },
  },
};

export default adminResolvers;
