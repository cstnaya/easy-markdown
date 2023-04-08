const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const cookieParser = require("cookie-parser");

const { db_connect, db_trace_connect } = require("./utils/db");
const { authedMiddleware } = require("./middlewares/authed.middle");

const authRouter = require("./routes/auth/auth.router");
const articleRouter = require("./routes/articles/article.router");
const corsOptions = require('./configs/cors')

const PORT = 8000;

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/api/articles", authedMiddleware, articleRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

db_trace_connect();

(async function () {
  await db_connect();

  app.listen(PORT, () => {
    console.log(`app start to work on port: ${PORT}......`);
  });
})();
