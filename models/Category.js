import mongoose , {Schema} from 'mongoose';


const CategorySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean, required: true },
    tax: { type: Number },
    taxType: { type: String }
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
