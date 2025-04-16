
import express from "express"
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createTask, getAllTasks } from "../controllers/task.controller.js";


const router = express.Router();

router.get("/" ,authMiddleware , getAllTasks )

router.post("/" , authMiddleware , createTask)

// router.put("/:id" , authMiddleware)

// router.delete("/:id" , authMiddleware)



export default router