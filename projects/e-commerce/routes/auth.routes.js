import express, { Router } from 'express';
import { getProfile, login, logout, refreshToken, signup } from '../controllers/auth.controllers.js';
import { protectedRoute } from '../middleware/auth.middlewaree.js';

const authRoutes = express.Router();

authRoutes.post("/signup" , signup)

authRoutes.post("/login" , login )

authRoutes.post("/logout" , logout)

authRoutes.post("/refresh-token" , refreshToken)

authRoutes.get("/profile" ,protectedRoute ,  getProfile)

export default authRoutes;