// // const express = require("express");
// // const path = require("path");
// // const dotenv = require('dotenv');
// // const cookieParser = require('cookie-parser');
// // const db = require('./config/connection')
// // const app = express();
// // const PORT = process.env.PORT || 3001;
// // const routes = require('./routes');

// dotenv.config();
// connectDB();

// //body parcer middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);

// //cookie parcer middleware
// app.use(cookieParser());

// app.listen(PORT, () =>
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT}`);
  });
});