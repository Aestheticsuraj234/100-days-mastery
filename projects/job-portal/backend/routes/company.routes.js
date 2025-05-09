import express, { Router } from "express"
import {protect} from "../middleware/user.middleware.js"
import { createCompany, deleteCompany, getAllCompanies, getCompanyById, updateCompany } from "../controllers/company.controller.js";

const routes = express.Router()

routes.post("/" , protect , createCompany);
routes.get("/" , getAllCompanies); //public route
routes.get("/:id" , getCompanyById) // public view
routes.put("/:id" , protect , updateCompany)
routes.delete("/:id" , protect , deleteCompany )


export default routes;