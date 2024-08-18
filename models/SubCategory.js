import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubCategorySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean, default: true },
    tax: { type: Number },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' }
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

export default SubCategory;
