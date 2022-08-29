const db = require("../../db");

const getAllTodoes = async () => {
  try {
    const todoes = await db.query("SELECT * FROM todo");

    return todoes.rows;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllTodoes;
