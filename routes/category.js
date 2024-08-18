import express from 'express';
import { createCategory, getCategories, getCategory, updateCategory } from '../controllers/categoryController.js';

const router = express.Router({ mergeParams: true });

router.get('/name/:name', getCategory);
router.post('/create', createCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);
router.patch('/:id', updateCategory);

export default router;
