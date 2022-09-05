const { removeTodo } = require("../../services/todoes");

const { createError } = require("../../helpers");

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const data = await removeTodo(todoId);
  if (!data) {
    throw createError(404);
  }

  res.json({ message: "Contact deleted" });
};

module.exports = deleteTodo;
