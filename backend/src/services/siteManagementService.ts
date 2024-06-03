import { Service } from 'typedi';
import SiteManagementRepository from '../repositories/siteManagementRepository';
import { ISiteManagement } from '../interfaces/ISiteManagement';

@Service()
class SiteManagementService {
  constructor(private siteManagementRepository: SiteManagementRepository) {}

  async createSiteManagement(siteManagement: ISiteManagement): Promise<ISiteManagement> {
    return await this.siteManagementRepository.createSiteManagement(siteManagement);
  }

  async getSiteManagements(): Promise<ISiteManagement[]> {
    return await this.siteManagementRepository.getSiteManagements();
  }

  async getSiteManagementById(id: string): Promise<ISiteManagement | null> {
    return await this.siteManagementRepository.getSiteManagementById(id);
  }

  async updateSiteManagement(id: string, siteManagement: Partial<ISiteManagement>): Promise<ISiteManagement | null> {
    return await this.siteManagementRepository.updateSiteManagement(id, siteManagement);
  }

  async deleteSiteManagement(id: string): Promise<ISiteManagement | null> {
    return await this.siteManagementRepository.deleteSiteManagement(id);
  }
}

export default SiteManagementService;
