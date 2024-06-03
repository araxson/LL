import { Service } from 'typedi';
import AdRepository from '../repositories/adRepository';
import { IAd } from '../interfaces/IAd';

@Service()
class AdService {
  constructor(private adRepository: AdRepository) {}

  async createAd(ad: IAd): Promise<IAd> {
    return await this.adRepository.createAd(ad);
  }

  async getAds(): Promise<IAd[]> {
    return await this.adRepository.getAds();
  }

  async getAdById(id: string): Promise<IAd | null> {
    return await this.adRepository.getAdById(id);
  }

  async updateAd(id: string, ad: Partial<IAd>): Promise<IAd | null> {
    return await this.adRepository.updateAd(id, ad);
  }

  async deleteAd(id: string): Promise<IAd | null> {
    return await this.adRepository.deleteAd(id);
  }
}

export default AdService;
