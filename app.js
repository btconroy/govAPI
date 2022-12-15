const congressPull = require('./utils/congressPull');

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const PORT = 3080 || process.env.PORT;

app.set('view', './view')
app.set('view engine', 'ejs');




app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
})

