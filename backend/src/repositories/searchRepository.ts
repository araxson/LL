import Search from '../models/Search';
import { ISearch } from '../interfaces/ISearch';

class SearchRepository {
  async createSearch(search: ISearch): Promise<ISearch> {
    const newSearch = new Search(search);
    return await newSearch.save();
  }

  async getSearches(): Promise<ISearch[]> {
    return await Search.find();
  }

  async getSearchById(id: string): Promise<ISearch | null> {
    return await Search.findById(id);
  }

  async updateSearch(id: string, search: Partial<ISearch>): Promise<ISearch | null> {
    return await Search.findByIdAndUpdate(id, search, { new: true });
  }

  async deleteSearch(id: string): Promise<ISearch | null> {
    return await Search.findByIdAndDelete(id);
  }
}

export default SearchRepository;
