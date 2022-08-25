const { upgradeIsComplited } = require("../../services/todoes");

const { createError } = require("../../helpers");

const updateIsComplited = async (req, res) => {
  const { todoId } = req.params;
  const { isComplited } = req.body;

  const todo = await upgradeIsComplited(todoId, isComplited);

  console.log(todo);

  if (!todo) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 200, data: todo[1] });
};

module.exports = updateIsComplited;
