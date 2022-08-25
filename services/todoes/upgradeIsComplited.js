const { Todo } = require("../../models");

const upgradeIsComplited = async (id, complite) => {
  try {
    const todo = await Todo.update(
      { isComplited: complite },
      { where: { id: id }, returning: true, plain: true }
    );
    return todo;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = upgradeIsComplited;
