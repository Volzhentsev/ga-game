require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
const apiRouter = require("./api/api.routes");
const authRouter = require("./routes/auth.routes");

const app = express();

const PORT = 4005;

serverConfig(app);

app.use("/api", apiRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`${PORT} порт`);
});
