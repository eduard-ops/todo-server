function generateId() {
  let i = 0;
  return function () {
    i += 1;
    return i;
  };
}

module.exports = generateId;
