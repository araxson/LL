import { Schema, model } from 'mongoose';

const AnalyticsSchema = new Schema({
  event: { type: String, required: true },
  properties: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Analytics = model('Analytics', AnalyticsSchema);

export default Analytics;
