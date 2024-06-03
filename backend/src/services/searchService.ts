import { Service } from 'typedi';
import SearchRepository from '../repositories/searchRepository';
import { ISearch } from '../interfaces/ISearch';

@Service()
class SearchService {
  constructor(private searchRepository: SearchRepository) {}

  async createSearch(search: ISearch): Promise<ISearch> {
    return await this.searchRepository.createSearch(search);
  }

  async getSearches(): Promise<ISearch[]> {
    return await this.searchRepository.getSearches();
  }

  async getSearchById(id: string): Promise<ISearch | null> {
    return await this.searchRepository.getSearchById(id);
  }

  async updateSearch(id: string, search: Partial<ISearch>): Promise<ISearch | null> {
    return await this.searchRepository.updateSearch(id, search);
  }

  async deleteSearch(id: string): Promise<ISearch | null> {
    return await this.searchRepository.deleteSearch(id);
  }
}

export default SearchService;
