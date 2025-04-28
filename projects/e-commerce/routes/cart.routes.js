import express from "express";
import { protectedRoute } from "../middleware/auth.middlewaree.js";
import { addToCart, getCartProducts, removeAllFromCart, updateQuantity } from "../controllers/cart.controllers.js";

const cartRoutes = express.Router();


cartRoutes.get("/" , protectedRoute , getCartProducts)

cartRoutes.post("/" , protectedRoute , addToCart)

cartRoutes.delete("/" , protectedRoute , removeAllFromCart);

cartRoutes.put("/:id" , protectedRoute , updateQuantity)

export default cartRoutes;