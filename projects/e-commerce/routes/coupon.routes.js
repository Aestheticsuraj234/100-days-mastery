import express from "express";
import { protectedRoute } from "../middleware/auth.middlewaree.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";


const couponRoutes = express.Router();

couponRoutes.get("/" , protectedRoute , getCoupon);
couponRoutes.post("/validate" , protectedRoute , validateCoupon)

export default couponRoutes;