const { createTodo } = require("../../services/todoes");

const { createError } = require("../../helpers");

const addTodo = async (req, res) => {
  const { todoText, isComplited = false, parentId } = req.body;
  const data = await createTodo(todoText, isComplited, parentId);

  if (!data) {
    throw createError(404);
  }

  return res.status(201).json({ message: "created", code: 201, data: data });
};

module.exports = addTodo;
