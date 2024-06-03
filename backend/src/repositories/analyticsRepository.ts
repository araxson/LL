import Analytics from '../models/Analytics';
import { IAnalytics } from '../interfaces/IAnalytics';

class AnalyticsRepository {
  async createAnalytics(analytics: IAnalytics): Promise<IAnalytics> {
    const newAnalytics = new Analytics(analytics);
    return await newAnalytics.save();
  }

  async getAnalytics(): Promise<IAnalytics[]> {
    return await Analytics.find();
  }

  async getAnalyticsById(id: string): Promise<IAnalytics | null> {
    return await Analytics.findById(id);
  }

  async updateAnalytics(id: string, analytics: Partial<IAnalytics>): Promise<IAnalytics | null> {
    return await Analytics.findByIdAndUpdate(id, analytics, { new: true });
  }

  async deleteAnalytics(id: string): Promise<IAnalytics | null> {
    return await Analytics.findByIdAndDelete(id);
  }
}

export default AnalyticsRepository;
