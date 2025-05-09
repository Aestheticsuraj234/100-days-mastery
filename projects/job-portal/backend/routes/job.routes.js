import express, { Router } from "express"
import { protect } from "../middleware/user.middleware.js";
import { createJob, deleteJobs, getAllJobs, getJobById, updateJob } from "../controllers/jobs.controller.js";

const routes = express.Router()


routes.post("/" , protect , createJob);
routes.get("/" , getAllJobs);
routes.get("/:id" , getJobById)
routes.put("/:id" , protect , updateJob)
routes.delete("/:id" , protect , deleteJobs)

export default routes;