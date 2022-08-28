const db = require("../../db");

const updateTodo = async (id, text) => {
  try {
    const todo = await db.query(
      "UPDATE todo set todotext = $1 where id= $2 RETURNING * ",
      [text, id]
    );
    return todo.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateTodo;
