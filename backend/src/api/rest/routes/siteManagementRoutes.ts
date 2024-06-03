import { Router } from 'express';
import { getSiteSettings, updateSiteSettings } from '../../controllers/siteManagementController';

const router = Router();

router.get('/settings', getSiteSettings);
router.put('/settings', updateSiteSettings);

export default router;
