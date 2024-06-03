import { Router } from 'express';
import { createSearch, getSearches } from './searchController';

const router = Router();

router.post('/search', createSearch);
router.get('/searches/:userId', getSearches);

export default router;
