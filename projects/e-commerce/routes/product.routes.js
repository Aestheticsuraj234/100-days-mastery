import express from "express"
import { adminRoute, protectedRoute } from "../middleware/auth.middlewaree.js";
import { createProduct, deleteProducts, getAllProducts, getFeaturedProducts, getProductsByCategory, getRecommendedProducts, toggleFeaturedProducts } from "../controllers/product.controllers.js";

const productRoutes = express.Router();


productRoutes.get("/" , protectedRoute , adminRoute , getAllProducts)

productRoutes.get("/featured" , getFeaturedProducts);

productRoutes.get("/category/:category" , getProductsByCategory);

productRoutes.get("/recommendations" , getRecommendedProducts);

productRoutes.post("/" , protectedRoute , adminRoute , createProduct);

productRoutes.patch("/:id" , protectedRoute , adminRoute , toggleFeaturedProducts)

productRoutes.delete("/:id" , protectedRoute , adminRoute , deleteProducts);

export default productRoutes;