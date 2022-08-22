const app = require("./app");

const { PORT = 3000 } = process.env;

const sequelize = require("./db");

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

start();
