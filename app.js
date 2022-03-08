const express = require('express');
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const app = express();
app.use(express.json());
app.use('/api/v1/user', userRouter);
app.use('/api/v1/tours', tourRouter);
module.exports = app