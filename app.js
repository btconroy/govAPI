//const congressPull = require('./utils/congressPull');

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const Members = require('./models/Congress');


const PORT = 3080 || process.env.PORT;

console.log(Members)

app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
})

