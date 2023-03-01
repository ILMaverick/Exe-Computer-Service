const mysql = require('mysql2');
const dotEnv = require('dotenv');

dotEnv.config({ path: __dirname + '/../.env' });

function createConnection(userName, password) {

    const _db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: userName,
        password: password,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    });

    _db.connect(error => {
        if (error) {
            console.log(error);
        } else {
            console.log('Database connected');
        }
    });

    return _db;
}


module.exports = createConnection;