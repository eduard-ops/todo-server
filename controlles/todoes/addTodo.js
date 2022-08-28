const { createTodo } = require("../../services/todoes");

const addTodo = async (req, res) => {
  const { todoText, isComplited, parentId } = req.body;

  const todo = await createTodo(todoText, isComplited, parentId);
  console.log(todo);
  return res.status(201).json({ message: "created", code: 201, data: todo });
};

module.exports = addTodo;
