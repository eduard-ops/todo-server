const { moveDownTodoById } = require("../../services/todoes");
const { createError } = require("../../helpers");

const { parcerTodo } = require("../../helpers");

const moveDownTodo = async (req, res) => {
  const { todoId } = req.params;
  const data = await moveDownTodoById(Number(todoId));

  if (!data) {
    throw createError(404);
  }

  const parceTodoes = parcerTodo(data);

  res.json({ message: "ok", code: 200, data: parceTodoes });
};

module.exports = moveDownTodo;
