const { Todo } = require("../../models");

const updateTodo = async (id, body) => {
  try {
    const todo = await Todo.update(
      { todoText: body.todoText },
      { where: { id: id }, returning: true, plain: true }
    );
    return todo;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateTodo;
