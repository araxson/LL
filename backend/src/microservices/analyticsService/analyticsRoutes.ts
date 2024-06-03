import { Router } from 'express';
import { trackEvent } from './analyticsController';

const router = Router();

router.post('/track', trackEvent);

export default router;
