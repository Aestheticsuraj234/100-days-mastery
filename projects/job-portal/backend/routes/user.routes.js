import express, { Router } from "express"
import { getCurrentUser, login, logout, register } from "../controllers/user.controller.js";


const routes = express.Router()

routes.post("/register" , register);
routes.post("/login" , login)
routes.post("/logout" , logout)
routes.get("/me" , getCurrentUser)

export default routes;