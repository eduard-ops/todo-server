const { createChildTodo } = require("../../services/todoes");

const addTodoChild = async (req, res) => {
  const { todoText, subNote, isComplited, parentId } = req.body;

  const todo = await createChildTodo(todoText, subNote, isComplited, parentId);
  return res.status(201).json({ message: "created", code: 201, data: todo });
};

module.exports = addTodoChild;
