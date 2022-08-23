import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { router as indexRouter } from './routes/index.js';
import { router as gameRouter } from './routes/game.js';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// const express = require('express');
// const bodyParser = require('body-parser');

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// const indexRouter = require('./routes/index.js');
// const gameRouter = require('./routes/game.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);

const server = app.listen(port, host, () =>
{

});

export default server;