const app = require("./app");

const { PORT = 3000 } = process.env;

async function bootstrap() {
  try {
    await app.listen(PORT);
    console.log("let's go");
  } catch (error) {
    console.log(error, "disconnect");
  }
}
bootstrap();
