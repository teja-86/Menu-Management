import Category from '../models/Category.js';
import mongoose from 'mongoose';
// Create Category
export const createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Categories
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Category by ID or Name
export const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const query = mongoose.Types.ObjectId.isValid(id)
            ? { _id: id }
            : { name: id };

        const category = await Category.findOne(query);
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Edit Category
export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
