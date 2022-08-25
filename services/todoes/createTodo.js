const { Todo } = require("../../models");

const createTodo = async (todoText, subNote, isComplited) => {
  try {
    const todo = await Todo.create({ todoText, subNote, isComplited });
    return todo;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createTodo;
