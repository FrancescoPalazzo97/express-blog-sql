require('dotenv').config();

const mysql = require(`mysql2`);
const password = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password,
    database: `db_blog`
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
})

module.exports = connection;