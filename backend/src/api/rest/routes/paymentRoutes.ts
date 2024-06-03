import { Router } from 'express';
import { getPayment, getPayments, createPayment, updatePayment, deletePayment } from '../../controllers/paymentController';

const router = Router();

router.get('/:id', getPayment);
router.get('/', getPayments);
router.post('/', createPayment);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

export default router;
