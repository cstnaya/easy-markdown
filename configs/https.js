const fs = require("fs");
const path = require("path");

const httpsOption = {
  key: fs.readFileSync(path.join(__dirname, "..", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "..", "cert.pem")),
};

module.exports = httpsOption;
