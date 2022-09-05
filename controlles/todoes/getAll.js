const { getAllTodoes } = require("../../services/todoes");

const { createError } = require("../../helpers");

const getAll = async (_, res) => {
  const todoes = await getAllTodoes();

  if (!todoes) {
    createError(404);
  }

  return res.json({ message: "success", code: 200, data: todoes });
};

module.exports = getAll;
