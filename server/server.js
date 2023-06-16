import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const connectDB = require('./config/db.js')
dotenv.config();


const PORT = process.env.PORT || 3001;

connectDB();

const app = express();
//body parcer middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//cookie parcer middleware
app.use(cookieParser());
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);