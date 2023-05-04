const db = require("../db/db.config");

const createTask = async (task) => {
  const { title, description, author } = task;
  const result = await db.todo.create({
    title, description, author
  });
  return result;
};

const getTask = async () => {
  const result = await db.todo.findAll();
  return result;
};


const updateTask = async (id, task) => {
  const result = await db.todo.update(task, {
    where: {
      id,
    },
  });
  return result;
};

const deleteTask = async (id) => {
  const result = await db.todo.destroy({
    where: {
      id,
    },
  });
  return result;
};

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
