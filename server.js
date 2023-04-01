const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello first express!</h1>');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`app start to work on port: ${PORT}......`);
});
