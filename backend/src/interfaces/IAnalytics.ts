export interface IAnalytics {
    trackEvent(event: string, properties: any): Promise<void>;
  }
  