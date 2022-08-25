const { createTodo } = require("../../services/todoes");

const addTodo = async (req, res) => {
  const { todoText, subNote, isComplited } = req.body;

  const todo = await createTodo(todoText, subNote, isComplited);
  return res.status(201).json({ message: "created", code: 201, data: todo });
};

module.exports = addTodo;
