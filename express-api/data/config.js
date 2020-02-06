const mysql = require('mysql');

// Set database connection credentials

const config = {
    host: 'localhost',
    user: 'exampleuser',
    password: 'pimylifeup',
    database: 'exampledb',
};

//create a MySQL pool
const pool = mysql.createPool(config);

// Exports the pool
module.exports = pool;
