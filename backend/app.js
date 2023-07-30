const express = require('express')
const cors = require("cors");
const db = require('./db.js');
const app = express()
const port = 3001
app.use(cors());
app.get('/fibnumbers/:num', db.getFibNumbers)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
