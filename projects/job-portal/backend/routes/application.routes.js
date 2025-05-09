import express from "express"
import { protect } from "../middleware/user.middleware"
import { get } from "mongoose";
import { applyToJob, getApplicationsByJob, getMyApplications, updateApplicationStatus } from "../controllers/application.controller.js";

const routes = express.Router()

routes.post("/" , protect , applyToJob);
routes.get("/my" , protect , getMyApplications)
routes.get("/job/:jobId" , protect , getApplicationsByJob)
routes.put("/:id" , protect , updateApplicationStatus)


export default routes