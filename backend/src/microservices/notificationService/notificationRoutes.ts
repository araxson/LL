import { Router } from 'express';
import { createNotification, getNotifications } from './notificationController';

const router = Router();

router.post('/notification', createNotification);
router.get('/notifications/:userId', getNotifications);

export default router;
