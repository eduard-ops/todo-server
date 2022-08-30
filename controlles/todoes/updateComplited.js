const { upgradeCpmplited } = require("../../services/todoes");

const updateComplited = async (req, res) => {
  const { todoId } = req.params;
  const { isComplited } = req.body;
  const data = await upgradeCpmplited(todoId, isComplited);
  res.json({ message: "update", data: data });
};

module.exports = updateComplited;
