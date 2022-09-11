const db = require("../../db");

const getAllTodoes = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM todo");
    const data = rows.sort((a, b) => a.id - b.id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllTodoes;
