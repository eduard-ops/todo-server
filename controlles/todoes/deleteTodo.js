const { removeTodo } = require("../../services/todoes");

const { createError } = require("../../helpers");

const { parcerTodo } = require("../../helpers");

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const data = await removeTodo(todoId);

  if (!data) {
    throw createError(404);
  }

  const parceTodoes = parcerTodo(data);

  res.json({ message: "Todo was deleted", code: 200, data: parceTodoes });
};

module.exports = deleteTodo;
