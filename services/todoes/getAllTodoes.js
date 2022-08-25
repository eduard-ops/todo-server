const { Todo } = require("../../models");

const getAllTodoes = async () => {
  try {
    const todoes = await Todo.findAll();
    return todoes;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllTodoes;
