const { upgradeCpmplited } = require("../../services/todoes");

const { createError } = require("../../helpers");

const updateComplited = async (req, res) => {
  const { todoId } = req.params;
  const { isComplited = false } = req.body;

  const data = await upgradeCpmplited(todoId, isComplited);

  if (!data) {
    throw createError(400);
  }

  res.json({ message: "update", code: 200, data: data });
};

module.exports = updateComplited;
