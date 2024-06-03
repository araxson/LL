import { IResolvers } from 'graphql-tools';
import { Search } from '../../../models/Search';

const searchResolvers: IResolvers = {
  Query: {
    getSearch: async (_: any, { id }: { id: string }) => {
      const search = await Search.findById(id);
      if (!search) {
        throw new Error('Search not found');
      }
      return search;
    },
    getSearches: async () => {
      return await Search.find();
    },
  },
  Mutation: {
    createSearch: async (_: any, { input }: { input: any }) => {
      const search = new Search({ ...input, createdAt: new Date() });
      await search.save();
      return search;
    },
    updateSearch: async (_: any, { id, input }: { id: string, input: any }) => {
      const search = await Search.findByIdAndUpdate(id, input, { new: true });
      if (!search) {
        throw new Error('Search not found');
      }
      return search;
    },
    deleteSearch: async (_: any, { id }: { id: string }) => {
      const search = await Search.findByIdAndDelete(id);
      if (!search) {
        throw new Error('Search not found');
      }
      return search;
    },
  },
};

export default searchResolvers;
