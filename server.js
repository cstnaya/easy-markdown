const path = require("path");
const helmet = require("helmet");
const express = require("express");
const cookieParser = require("cookie-parser");

const { db_connect, db_trace_connect } = require("./utils/db");

const authRouter = require("./routes/auth/auth.router");
const articleRouter = require("./routes/articles/article.router");

const { authedMiddleware } = require("./middlewares/authed.middle");

const PORT = 8000;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/articles", authedMiddleware, articleRouter);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get("/*", express.static(path.join(__dirname, "client", "dist")));

db_trace_connect();

(async function () {
  await db_connect();

  app.listen(PORT, () => {
    console.log(`app start to work on port: ${PORT}......`);
  });
})();
