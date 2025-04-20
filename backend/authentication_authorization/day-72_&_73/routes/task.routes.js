import express from "express"
import { addTask, getTasks } from "../controllers/task.controller.js"
import { validateSession } from "../middleware/session.middleware.js"


const taskRouter  = express.Router()



taskRouter.post("/" , validateSession , addTask)
taskRouter.get("/" , validateSession , getTasks)

export default taskRouter