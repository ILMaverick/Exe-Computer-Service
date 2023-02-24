const db = require('./dbService');
const dotEnv = require('dotenv');

dotEnv.config({ path: '../backend/.env' });

const getUsers = (req, res) => {
    db(process.env.DB_USER, process.env.DB_USER_PASSWORD).query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length != 0) {
            res.send({
                message: "All users",
                data: result
            });
        } else {
            res.send({
                message: "No users come back!"
            })
        }
    }
    );
}

module.exports = {getUsers};