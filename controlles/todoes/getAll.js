const { getAllTodoes } = require("../../services/todoes");

const getAll = async (req, res) => {
  const todoes = await getAllTodoes();
  console.log(todoes);

  return res.json({ message: "success", code: 200, data: todoes });
};

module.exports = getAll;
