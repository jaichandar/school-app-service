const express = require('express')
const parentRouter = express.Router();
const userRouter = require('./user');

parentRouter.use('/user', userRouter);

module.exports = parentRouter;