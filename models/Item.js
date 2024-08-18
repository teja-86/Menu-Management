import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean },
    tax: { type: Number },
    baseAmount: { type: Number, required: true },
    discount: { type: Number },
    totalAmount: { type: Number, required: true },
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory' },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' }
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
