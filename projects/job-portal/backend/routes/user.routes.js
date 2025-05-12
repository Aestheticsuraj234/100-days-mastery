import express, { Router } from "express"
import { getAllCompaniesByUser, getCurrentUser, login, logout, register } from "../controllers/user.controller.js";
import { protect } from "../middleware/user.middleware.js";


const routes = express.Router()

routes.post("/register" , register);
routes.post("/login" , login)
routes.post("/logout" , logout)
routes.get("/me" , protect , getCurrentUser)

routes.get("/my-company" , protect , getAllCompaniesByUser)

export default routes;