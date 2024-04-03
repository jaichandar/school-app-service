const morgan = require('morgan')
const cors = require('cors')
const express = require('express');

module.exports = (app) => {
    app.use(cors())
    app.use(morgan('dev'));
    app.use(express.json());
}