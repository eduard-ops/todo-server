const { createError } = require("../../helpers");

const { upgradeTodo } = require("../../services/todoes");

const { parcerTodo } = require("../../helpers");

const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { todoText } = req.body;
  const todo = await upgradeTodo(todoId, todoText);
  if (!todo) {
    throw createError(404);
  }

  const parceTodoes = parcerTodo(todo);
  res.json({ message: "updated", code: 201, data: parceTodoes });
};

module.exports = updateTodo;
