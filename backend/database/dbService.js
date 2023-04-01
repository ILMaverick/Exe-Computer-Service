const mysql = require('mysql2');
const dotEnv = require('dotenv');

dotEnv.config({ path: __dirname + '/../.env' });

function createConnection(nomeUtente, password) {

    const _db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: nomeUtente,
        password: password,
        database: process.env.DB_NOME,
        port: process.env.DB_PORTA
    });

    _db.connect(error => {
        if (error) {
            console.log(error);
        } else {
            console.log('Database connesso');
        }
    });

    return _db;
}


module.exports = createConnection;