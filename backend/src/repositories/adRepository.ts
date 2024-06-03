import Ad from '../models/Ad';
import { IAd } from '../interfaces/IAd';

class AdRepository {
  async createAd(ad: IAd): Promise<IAd> {
    const newAd = new Ad(ad);
    return await newAd.save();
  }

  async getAds(): Promise<IAd[]> {
    return await Ad.find();
  }

  async getAdById(id: string): Promise<IAd | null> {
    return await Ad.findById(id);
  }

  async updateAd(id: string, ad: Partial<IAd>): Promise<IAd | null> {
    return await Ad.findByIdAndUpdate(id, ad, { new: true });
  }

  async deleteAd(id: string): Promise<IAd | null> {
    return await Ad.findByIdAndDelete(id);
  }
}

export default AdRepository;
