const homeService = require("../service/home.service");

const createTask = async (req, res) => {
  try {
    const result = await homeService.createTask(req.body);

    if (result.todo.options.isNewRecord === true) {
      return res.json({ message: "Task added" });
    } else {
      return res.json({ message: "Not found" });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const result = await homeService.getTask();
    res.json({ tasks: result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const result = await homeService.updateTask(req.params.id, req.body);
    if (result.length === 1) {
      res.json({ message: "Task updated successfully" });
    } else {
      res.json({ message: "Task not found" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await homeService.deleteUser(req.params.id);
    if (result === 1) {
      res.json({ message: "Task deleted successfully" });
    } else {
      res.json({ message: "Task not found" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
