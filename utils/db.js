const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    database: 'gov_data',
    password: process.env.DB_PSW
});


module.exports = connection.promise();

