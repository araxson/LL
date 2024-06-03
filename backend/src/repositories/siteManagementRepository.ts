import SiteManagement from '../models/SiteManagement';
import { ISiteManagement } from '../interfaces/ISiteManagement';

class SiteManagementRepository {
  async createSiteManagement(siteManagement: ISiteManagement): Promise<ISiteManagement> {
    const newSiteManagement = new SiteManagement(siteManagement);
    return await newSiteManagement.save();
  }

  async getSiteManagements(): Promise<ISiteManagement[]> {
    return await SiteManagement.find();
  }

  async getSiteManagementById(id: string): Promise<ISiteManagement | null> {
    return await SiteManagement.findById(id);
  }

  async updateSiteManagement(id: string, siteManagement: Partial<ISiteManagement>): Promise<ISiteManagement | null> {
    return await SiteManagement.findByIdAndUpdate(id, siteManagement, { new: true });
  }

  async deleteSiteManagement(id: string): Promise<ISiteManagement | null> {
    return await SiteManagement.findByIdAndDelete(id);
  }
}

export default SiteManagementRepository;
