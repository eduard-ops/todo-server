const db = require("../../db");

const removeTodo = async (id) => {
  try {
    const todo = await db.query("DELETE  FROM todo WHERE id LIKE $1", [
      "%" + id + "%",
    ]);
    console.log(todo.rows[0]);
    return todo.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeTodo;
