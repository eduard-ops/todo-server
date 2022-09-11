const { getAllTodoes } = require("../../services/todoes");

const { createError } = require("../../helpers");

const { parcerTodo } = require("../../helpers");

const getAll = async (_, res) => {
  const todoes = await getAllTodoes();

  if (!todoes) {
    createError(404);
  }

  const parceTodoes = parcerTodo(todoes);

  return res.json({ message: "success", code: 200, data: parceTodoes });
};

module.exports = getAll;
