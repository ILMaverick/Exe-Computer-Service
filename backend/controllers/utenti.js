const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('./dbService');
const dotEnv = require('dotenv');

dotEnv.config({ path: '../backend/.env' });

const db_utenti = process.env.DB_USER;
const db_password = process.env.DB_USER_PASSWORD;


const login = (req, res) => {
    db(db_utenti, db_password).query('SELECT id_utente, nome, password FROM utenti WHERE codice_utente = ? OR numero_tel = ? OR email = ?', [req.body.userName, req.body.userName, req.body.userName], (err, result) => {
        console.log(result);
        if (err) {
            res.status(500).send({
                messaggio: err.message
            })
        } else if (result.length != 0) {
            if (req.body.password == result[0].password) {
                // const token = this.createToken();
                res.send({
                    risultato: true,
                    id_utente: result[0].id_utente,
                    nome: result[0].nome,
                    messaggio: "Login effettuato!"
                });
            }
            else {
                res.send({
                    risultato: false,
                    id_utente: 0,
                    nome: "",
                    messaggio: "Username o password errati!"
                });
            }
        } else {
            res.send({
                risultato: false,
                id_utente: 0,
                nome: "",
                messaggio: "Utente non trovato!"
            });
        }
    }
    );
}

// const getUsers = (req, res) => {
//     db(db_utenti, db_password).query('SELECT * FROM users', (err, result) => {
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

function createToken() {
    return true
}

module.exports = { login };