const db = require("../../db");

const createTodo = async (todoText, isComplited, parentId) => {
  try {
    const todo = await db.query(
      `INSERT INTO todo (todotext, iscomplited, parentid) values($1,$2,$3) RETURNING * `,
      [todoText, isComplited, parentId]
    );
    return todo.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createTodo;
