import { createTask, fetchTasks } from "../services/task.service.js";

export const addTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await createTask(req.session.userId, title, description);

    res.status(201).json({
      success: true,
      message: "Task added successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await fetchTasks(req.session.userId);
    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};
