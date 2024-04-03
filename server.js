const express = require('express')
const app = express()
require('dotenv').config({});

const middleware = require('./middleware/index');
const { connectDb } = require('./db/index');

const PORT = process.env.PORT || 8888;

middleware(app);
connectDb();
app.use('/api/v1', require('./routers/index'));

app.listen(PORT, () => {
    console.log(`Application Running on PORT: ${PORT}`);
})