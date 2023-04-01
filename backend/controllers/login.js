const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../database/dbService.js');
const dotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utente = process.env.DB_UTENTE;
const db_password_utente = process.env.DB_PASSWORD_UTENTE;

const login = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT id_utente, nome, password, ruolo FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.userName, req.body.userName], async (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            await bcrypt.compare(req.body.password, result[0].password).then((_result) => {
                if (_result) {
                    let bearerToken;
                    if(result[0].ruolo === 'standard'){
                    bearerToken = jwt.sign({}, fs.readFileSync(path.resolve(__dirname + '/private-key-utenti.pem'), 'utf8'),{
                        algorithm: 'RS256',
                        expiresIn: 1800
                    });
                    } else {
                        bearerToken = jwt.sign({}, fs.readFileSync(path.resolve(__dirname + '/private-key-tech.pem'), 'utf8'),{
                            algorithm: 'RS256',
                            expiresIn: 1800
                        });
                    }
                    res.status(200)
                        .send({
                            risultato: true,
                            id_utente: result[0].id_utente,
                            nome: result[0].nome,
                            ruolo: result[0].ruolo,
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