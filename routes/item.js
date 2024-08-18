import express from 'express';
import {
    createItem,
    getItems,
    getItem,
    updateItem,
    searchItem
} from '../controllers/itemController.js';

const router = express.Router({ mergeParams: true });

router.get('/search', searchItem);
router.post('/', createItem);
router.get('/', getItems);
router.get('/:idOrName', getItem);
router.patch('/:id', updateItem);

export default router;
