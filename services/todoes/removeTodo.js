const db = require("../../db");

const removeTodo = async (id) => {
  try {
    const todo = db.query("DELETE FROM todo where id = $1", [id]);
    db.query("DELETE FROM todo where parentid = $1", [id]);
    return todo.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeTodo;
