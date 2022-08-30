const db = require("../../db");

const createTodo = async (id, todoText, isComplited, parentId) => {
  try {
    const todo = await db.query(
      `INSERT INTO todo (id, todotext, iscomplited, parentid) values($1,$2,$3,$4) RETURNING * `,
      [id, todoText, isComplited, parentId]
    );
    return todo.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createTodo;
