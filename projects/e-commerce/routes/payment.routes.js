import express from "express"
import { protectedRoute } from "../middleware/auth.middlewaree.js";
import { checkoutSuccess, createCheckoutSession } from "../controllers/payment.controller.js";


const paymentRoutes = express.Router();


paymentRoutes.post("/create-checkout-session" , protectedRoute , createCheckoutSession);

paymentRoutes.post("/checkout-success" , protectedRoute , checkoutSuccess);

export default paymentRoutes