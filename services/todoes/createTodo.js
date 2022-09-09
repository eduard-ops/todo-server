const db = require("../../db");

const getAllTodoes = require("./getAllTodoes");

const createTodo = async (todoText, isComplited, parentId) => {
  try {
    await db.query(
      `INSERT INTO todo (todotext, iscomplited, parentid) values($1,$2,$3) RETURNING * `,
      [todoText, isComplited, parentId]
    );
    const data = await getAllTodoes();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createTodo;
