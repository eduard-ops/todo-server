const db = require("../../db");

const { parcerTodo } = require("../../helpers");

const getAllTodoes = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM todo");
    const data = rows.sort((a, b) => a.id - b.id);
    const parceData = parcerTodo(data);
    return parceData;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllTodoes;
