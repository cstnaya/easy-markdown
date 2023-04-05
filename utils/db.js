const mongoose = require("mongoose");
const config = require("../configs/config");

const DB_URL = config.MONGO_DB;

async function db_connect() {
  await mongoose.connect(DB_URL);
}

function db_trace_connect() {
  mongoose.connection.once("open", () => {
    console.log("mongoDB connects succeeded.");
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}

module.exports = { db_connect, db_trace_connect };
