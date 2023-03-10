const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../database/dbService.js');
const dotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utenti = process.env.DB_USER;
const db_password = process.env.DB_USER_PASSWORD;

const login = (req, res) => {
    db(db_utenti, db_password).query('SELECT id_utente, nome, password, ruolo FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.userName, req.body.userName], async (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            await bcrypt.compare(req.body.password, result[0].password).then((_result) => {
                if (_result) {
                    const bearerToken = jwt.sign({}, fs.readFileSync(path.resolve(__dirname + '/private-key.pem'), 'utf8'),{
                        algorithm: 'RS256',
                        expiresIn: 1800
                    });
                    res.status(200)
                        .send({
                            risultato: true,
                            id_utente: result[0].id_utente,
                            nome: result[0].nome,
                            token: bearerToken,
                            scadenzaToken: 1800,
                            messaggio: "Login effettuato!"
                        });
                }
                else {
                    res.status(401).send({
                        risultato: false,
                        messaggio: "Username o password errati!"
                    });
                };
            }
            )
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Utente non trovato!"
            });
        };
    }
    );
}

module.exports = login;