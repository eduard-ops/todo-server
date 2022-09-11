/* eslint-disable prefer-const */
const getAllTodoes = require("./getAllTodoes");

const moveUpTodoById = async (id) => {
  const data = await getAllTodoes();
  let index = data.findIndex((e) => e.id === id);

  console.log(data[index]);
  let el = data[index].id;
  data[index].id = data[index - 1].id;
  data[index - 1].id = el;

  const sortData = data.sort((a, b) => a.id - b.id);

  return sortData;
};

module.exports = moveUpTodoById;
