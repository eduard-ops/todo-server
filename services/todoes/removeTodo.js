const { Todo } = require("../../models");

const removeTodo = async (id) => {
  try {
    const todo = Todo.destroy({ where: { id: id } });
    return todo;
  } catch (error) {}
};

module.exports = removeTodo;
