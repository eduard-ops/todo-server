const { createError } = require("../../helpers");

const { upgradeTodo } = require("../../services/todoes");

const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { todoText } = req.body;
  const todo = await upgradeTodo(todoId, todoText);
  if (!todo) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 201, data: todo });
};

module.exports = updateTodo;
