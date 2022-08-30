const { createTodo } = require("../../services/todoes");

const { generateId } = require("../../helpers");

const id = generateId();

const addTodo = async (req, res) => {
  const { todoText, isComplited, parentId } = req.body;
  const todo = await createTodo(id(), todoText, isComplited, parentId);

  return res.status(201).json({ message: "created", code: 201, data: todo });
};

module.exports = addTodo;
