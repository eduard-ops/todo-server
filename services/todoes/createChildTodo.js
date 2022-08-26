const { Todo } = require("../../models");

const createTodo = async (todoText, subNotes, isComplited, parentId) => {
  try {
    const todo = await Todo.create({
      todoText,
      subNotes,
      isComplited,
      parentId,
    });

    return todo;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createTodo;
