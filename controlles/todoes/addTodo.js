const { createTodo } = require("../../services/todoes");

const { createError } = require("../../helpers");

const { generateId } = require("../../helpers");

const { parcerTodo } = require("../../helpers");

const id = generateId();

const addTodo = async (req, res) => {
  const { todoText, isComplited = false, parentId } = req.body;
  const data = await createTodo(id(), todoText, isComplited, parentId);

  if (!data) {
    throw createError(404);
  }

  const parceTodoes = parcerTodo(data);

  return res
    .status(201)
    .json({ message: "created", code: 201, data: parceTodoes });
};

module.exports = addTodo;
