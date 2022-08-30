const db = require("../../db");

const upgradeComplited = async (id, isComplited) => {
  const data = await db.query(
    "UPDATE todo set iscomplited = $1 where id = $2",
    [isComplited, id]
  );
  return data.rows[0];
};

module.exports = upgradeComplited;
