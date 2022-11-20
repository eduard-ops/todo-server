const app = require("./app");

const pool = require("./db");

const { PORT = 3000 } = process.env;

pool
  .connect()
  .then(() =>
    app.listen(PORT, () => console.log("Database connection successful"))
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
