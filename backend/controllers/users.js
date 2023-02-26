const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('./dbService');
const dotEnv = require('dotenv');

dotEnv.config({ path: '../backend/.env' });

const user_db = process.env.DB_USER;
const password_db = process.env.DB_USER_PASSWORD;

const _user = {
    id_user: 0,
    userName:'',
    user_code: '',
    name: '',
    lastname: '',
    tel_number: '',
    email: '',
    password: ''
}

const login = (req, res) => {
    console.log(req.body);
    db(user_db, password_db).query('SELECT id_user, name, password FROM users WHERE user_code = ? OR tel_number = ? OR email = ?',[req.body.userName, req.body.userName, req.body.userName], async (err, result) => {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        } else if( result.length != 0 && req.body.password == result[0].password ){
                // const token = this.createToken();
                res.send({
                    id_user: result[0].id_user,
                    name: result[0].name,
                    message: "User checked!"
                });
            } else{
                res.send({
                    message: "User unchecked!"
                });
            }
        }
    );
}

// const getUsers = (req, res) => {
//     db(user_db, password_db).query('SELECT * FROM users', (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         if (result.length != 0) {
//             res.send({
//                 message: "All users",
//                 data: result
//             });
//         } else {
//             res.send({
//                 message: "No users come back!"
//             })
//         }
//     }
//     );
// }

function createToken(){
    return true
}

module.exports = { login };