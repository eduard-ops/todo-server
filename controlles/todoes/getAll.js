const { getAllTodoes } = require("../../services/todoes");

const getAll = async (req, res) => {
  const todoes = await getAllTodoes();
  return res.json(todoes);
};

module.exports = getAll;
