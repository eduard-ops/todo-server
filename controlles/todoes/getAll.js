const { getAllTodoes } = require("../../services/todoes");

const getAll = async (req, res) => {
  const todoes = await getAllTodoes();
  const normalizeArr = todoes.map((el) => el.toJSON());

  return res.json({ message: "success", code: 200, data: normalizeArr });
};

module.exports = getAll;
