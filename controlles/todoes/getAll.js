const getAll = (req, res) => {
  res.json({ status: 200, message: "Вернули все" });
};

module.exports = getAll;
