import SubCategory from '../models/SubCategory.js';
import mongoose from 'mongoose';
// Create SubCategory
export const createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory({
            ...req.body,
            taxApplicability: req.body.taxApplicability !== undefined ? req.body.taxApplicability : req.body.categoryTaxApplicability,
            tax: req.body.tax !== undefined ? req.body.tax : req.body.categoryTax
        });
        await subCategory.save();
        res.status(201).json(subCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All SubCategories
export const getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get SubCategory by ID or Name
export const getSubCategory = async (req, res) => {
    try {
        const { idOrName } = req.params;
        // Find by ID if it's a valid ObjectId
        const isValidObjectId = mongoose.Types.ObjectId.isValid(idOrName);
        const query = isValidObjectId ? { _id: idOrName } : { name: idOrName };

        const subCategory = await SubCategory.findOne(query);
        if (!subCategory) return res.status(404).json({ message: "SubCategory not found" });
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Edit SubCategory
export const updateSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) return res.status(404).json({ message: "SubCategory not found" });
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
