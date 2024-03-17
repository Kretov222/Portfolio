const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { json } = require('sequelize');
const apiAppealsRouter = require('./src/routers/appeals/apiRouter');

const app = express();

const PORT = process.env.PORT || 3001;
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extends: true }));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use('/api/v1/appeal', apiAppealsRouter);
app.listen(PORT, () => console.log(PORT));
