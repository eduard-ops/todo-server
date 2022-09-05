const { removeChildTodo } = require("../../services/todoes");

const { createError } = require("../../helpers");

const deleteChildTodo = async (req, res) => {
  const { todoId } = req.params;
  const data = await removeChildTodo(todoId);
  if (!data) {
    throw createError(404);
  }

  res.json({ message: "Todo was deleted" });
};

module.exports = deleteChildTodo;
