import { Router } from 'express';
import { createPayment, getPayments } from './paymentController';

const router = Router();

router.post('/payment', createPayment);
router.get('/payments/:userId', getPayments);

export default router;
