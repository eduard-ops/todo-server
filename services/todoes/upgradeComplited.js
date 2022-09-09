const db = require("../../db");

const getAllTodoes = require("./getAllTodoes");

const upgradeComplited = async (id, isComplited) => {
  try {
    await db.query("UPDATE todo set iscomplited = $1 where id = $2", [
      isComplited,
      id,
    ]);
    const data = await getAllTodoes();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = upgradeComplited;
