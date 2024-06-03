import { Router } from 'express';
import { getAd, getAds, createAd, updateAd, deleteAd } from '../../controllers/adController';

const router = Router();

router.get('/:id', getAd);
router.get('/', getAds);
router.post('/', createAd);
router.put('/:id', updateAd);
router.delete('/:id', deleteAd);

export default router;
