import express from 'express';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.lib.js';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';

dotenv.config();

const app = express();




app.use(express.json());
app.use(cookieParser());


connectDB()



app.use("/api/v1/auth" , authRoutes);

app.use("/api/v1/products" , productRoutes);

app.use("/api/v1/cart" , cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});