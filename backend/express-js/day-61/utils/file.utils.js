import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // path to current file

const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "data", "tasks.json");

export const readTasks = () => {
  try {
    ensureFileExists();
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(filePath , JSON.stringify(tasks , null , 2) , "utf-8")
    } catch (error) {
        console.log(error);
    }
};

export const ensureFileExists = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, "[]", "utf-8");
    }
  } catch (error) {
    console.log(error);
  }
};
