const db = require("../../db");

const getAllTodoes = require("./getAllTodoes");

const createTodo = async (id, todoText, isComplited, parentId) => {
  console.log(id);
  try {
    await db.query(
      `INSERT INTO todo (id, todotext, iscomplited, parentid) values($1,$2,$3,$4) RETURNING * `,
      [id, todoText, isComplited, parentId]
    );
    const data = await getAllTodoes();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createTodo;
