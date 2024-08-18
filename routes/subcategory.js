import express from 'express';
import { createSubCategory, getSubCategories, getSubCategory, updateSubCategory } from '../controllers/subcategoryController.js';

const router = express.Router({ mergeParams: true });

router.post('/', createSubCategory);
router.get('/', getSubCategories);
router.get('/:idOrName', getSubCategory);
router.patch('/:id', updateSubCategory);

export default router;
