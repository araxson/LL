import { Router } from 'express';
import { getAdmin, getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../../controllers/adminController';

const router = Router();

router.get('/:id', getAdmin);
router.get('/', getAdmins);
router.post('/', createAdmin);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

export default router;
