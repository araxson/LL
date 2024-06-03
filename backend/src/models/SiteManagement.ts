import { Schema, model } from 'mongoose';

const SiteManagementSchema = new Schema({
  siteName: { type: String, required: true },
  siteUrl: { type: String, required: true },
  contactEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const SiteManagement = model('SiteManagement', SiteManagementSchema);

export default SiteManagement;
