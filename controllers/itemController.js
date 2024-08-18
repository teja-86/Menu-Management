import Item from '../models/Item.js';
import mongoose from 'mongoose';
// Create Item
export const createItem = async (req, res) => {
    try {
        const item = new Item({
            ...req.body,
            totalAmount: req.body.baseAmount - req.body.discount
        });
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Items
export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Item by ID or Name
export const getItem = async (req, res) => {
    try {
        const { idOrName } = req.params;
        const query = mongoose.Types.ObjectId.isValid(idOrName)
            ? { _id: idOrName }
            : { name: idOrName };

        const item = await Item.findOne(query);
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Edit Item
export const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Search Item by Name
export const searchItem = async (req, res) => {
    try {
        const items = await Item.find({ name: new RegExp(req.params.name, 'i') });
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
