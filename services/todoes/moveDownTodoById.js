const getAllTodoes = require("./getAllTodoes");

const db = require("../../db");

const moveDownTodoById = async (id) => {
  const oldData = await getAllTodoes();
  // eslint-disable-next-line prefer-const
  const index = oldData.findIndex((e) => e.id === id);
  console.log(index);

  await db.query("UPDATE todo SET id=-1 WHERE ID=$1", [oldData[index].id]);
  await db.query("UPDATE todo SET id=$1 WHERE ID=$2", [
    oldData[index].id,
    oldData[index + 1].id,
  ]);

  await db.query("UPDATE todo SET id=$1 WHERE ID=-1", [oldData[index + 1].id]);

  await db.query("UPDATE todo SET parentid=-1 WHERE parentid=$1", [
    oldData[index].id,
  ]);
  await db.query("UPDATE todo SET parentid=$1 WHERE parentid=$2", [
    oldData[index].id,
    oldData[index + 1].id,
  ]);

  await db.query("UPDATE todo SET parentid=$1 WHERE parentid=-1", [
    oldData[index + 1].id,
  ]);

  const data = await getAllTodoes();

  return data;
};

module.exports = moveDownTodoById;
