const db = require("../../db");

const getAllTodoes = require("./getAllTodoes");

const removeChildTodo = async (id) => {
  try {
    await db.query(
      `DELETE FROM todo WHERE parentid IN (
    with recursive all_todo (id,parentid, root_id) as (
        select t1.id,
        t1.parentid as parentid,
        t1.id as root_id
        from todo t1

        union all

        select c1.id,
        c1.parentid as parentid,
        p.root_id
        from todo c1
        join all_todo p on p.id = c1.parentid
    )
    select id from all_todo ap where root_id=$1
)`,
      [id]
    );
    const data = await getAllTodoes();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeChildTodo;
