import { Router } from 'express';
import { getSearch, getSearches, createSearch, updateSearch, deleteSearch } from '../../controllers/searchController';

const router = Router();

router.get('/:id', getSearch);
router.get('/', getSearches);
router.post('/', createSearch);
router.put('/:id', updateSearch);
router.delete('/:id', deleteSearch);

export default router;
