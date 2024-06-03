import { Router } from 'express';
import { getNotification, getNotifications, createNotification, updateNotification, deleteNotification } from '../../controllers/notificationController';

const router = Router();

router.get('/:id', getNotification);
router.get('/', getNotifications);
router.post('/', createNotification);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

export default router;
