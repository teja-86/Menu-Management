import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import categoryRoutes from './routes/category.js';
import subCategoryRoutes from './routes/subcategory.js';
import itemRoutes from './routes/item.js';

dotenv.config();

// Connect to the Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const app = express();
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/categories/:categoryId/subcategories', subCategoryRoutes);
app.use('/api/subcategories/:subCategoryId/items', itemRoutes);
app.get('/', (req, res) => res.send('Welcome to the Menu Management'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
