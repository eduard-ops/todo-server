const db = require("../../db");

const getAllTodoes = require("./getAllTodoes");

const updateTodo = async (id, text, isComplited = false) => {
  try {
    await db.query(
      "UPDATE todo set todotext = $1 , iscomplited = $2 where id = $3",
      [text, isComplited, id]
    );
    const data = await getAllTodoes();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateTodo;
