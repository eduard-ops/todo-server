const parcerTodo = (items = [], parentId = null, link = "parentid") => {
  const newArr = items
    .filter((item) => item[link] === parentId)
    .map((item) => ({ ...item, subnotes: parcerTodo(items, item.id) }));
  return newArr;
};

module.exports = parcerTodo;
