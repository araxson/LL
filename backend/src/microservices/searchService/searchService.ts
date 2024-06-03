import { Service } from 'typedi';
import Search from './searchModel';

@Service()
class SearchService {
  async createSearch({ query, userId, results }) {
    const search = new Search({ query, userId, results });
    return await search.save();
  }

  async getSearches(userId) {
    return await Search.find({ userId });
  }

  async initialize() {
    // Any initialization code for the search service
    console.log('Search service initialized');
  }
}

export default SearchService;
