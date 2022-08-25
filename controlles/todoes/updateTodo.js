const { createError } = require("../../helpers");

const { upgradeTodo } = require("../../services/todoes");

const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const todo = await upgradeTodo(todoId, req.body);
  if (!todo) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 201, data: todo[1] });
};

module.exports = updateTodo;
