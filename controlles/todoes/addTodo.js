const { createTodo } = require("../../services/todoes");

const { createError } = require("../../helpers");

const addTodo = async (req, res) => {
  const { todoText, isComplited, parentId } = req.body;
  const todo = await createTodo(todoText, isComplited, parentId);

  if (!todo) {
    throw createError(404);
  }

  return res.status(201).json({ message: "created", code: 201, data: todo });
};

module.exports = addTodo;
