import { readTasks, writeTasks } from "../utils/file.utils.js";

export const getAllTasks = async (req, res) => {

  if (!req.session.user) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
  const tasks = await readTasks();

  res.json(tasks.filter((task) => task.usernamne === req.session.user.username));
};

export const createTask = async(req, res) => {
    const {title , description} = req.body;
    const tasks = await readTasks();

    const newTask = {
        id: crypto.randomUUID(),
        username: req.session.user.username,
        title,
        description,
        completed:false
    }

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json(newTask);
};
