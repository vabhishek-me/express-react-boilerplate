import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mainRouter from './routes/index';
import { errorHandler } from './middlewares';

// configure environment
dotenv.config();

// setup
const app = express();
app.use(logger('dev')); // logger
app.use(express.json()); // body parser as json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // cookie parser

// api
app.use('/api', mainRouter);

// error handler
app.use(errorHandler);

// client
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export default app;
