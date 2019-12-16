const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Simple app ever!');
});

app.listen(PORT, () => {
  console.log(`>>Server is listening on port: ${PORT}`);
})