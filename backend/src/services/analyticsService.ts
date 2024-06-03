import { Service } from 'typedi';
import AnalyticsRepository from '../repositories/analyticsRepository';
import { IAnalytics } from '../interfaces/IAnalytics';

@Service()
class AnalyticsService {
  constructor(private analyticsRepository: AnalyticsRepository) {}

  async createAnalytics(analytics: IAnalytics): Promise<IAnalytics> {
    return await this.analyticsRepository.createAnalytics(analytics);
  }

  async getAnalytics(): Promise<IAnalytics[]> {
    return await this.analyticsRepository.getAnalytics();
  }

  async getAnalyticsById(id: string): Promise<IAnalytics | null> {
    return await this.analyticsRepository.getAnalyticsById(id);
  }

  async updateAnalytics(id: string, analytics: Partial<IAnalytics>): Promise<IAnalytics | null> {
    return await this.analyticsRepository.updateAnalytics(id, analytics);
  }

  async deleteAnalytics(id: string): Promise<IAnalytics | null> {
    return await this.analyticsRepository.deleteAnalytics(id);
  }
}

export default AnalyticsService;
