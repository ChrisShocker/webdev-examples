const express = require('express');

// create an express app
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World, Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});