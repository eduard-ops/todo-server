const { createError } = require("../../helpers");

const { removeTodo } = require("../../services/todoes");

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const todo = await removeTodo(todoId);
  if (!todo) {
    createError(404);
  }

  res.json({ message: "Contact deleted" });
};

module.exports = deleteTodo;
