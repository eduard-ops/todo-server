const app = require("./app");

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// .catch((error) => {
//   console.log(error.message);
//   process.exit(1);
// });
