// // const express = require("express");
// // const path = require("path");
// // const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// // const db = require('./config/connection')
// // const app = express();
// // const PORT = process.env.PORT || 3001;
// // const routes = require('./routes');


//cookie parcer middleware
// app.use(cookieParser());

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const app = express();

// //body parcer middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT}`);
  });
});