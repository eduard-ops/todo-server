const { moveUpTodoById } = require("../../services/todoes");
const { createError } = require("../../helpers");

const moveUpTodo = async (req, res) => {
  const { todoId } = req.params;
  const data = await moveUpTodoById(Number(todoId));

  if (!data) {
    throw createError(404);
  }

  res.json({ message: "ok", code: 200, data: data });
};

module.exports = moveUpTodo;
