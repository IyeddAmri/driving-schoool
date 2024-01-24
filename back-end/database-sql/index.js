// database-mysql/index.js

const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
