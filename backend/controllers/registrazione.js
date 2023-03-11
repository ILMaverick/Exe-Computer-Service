const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../database/dbService.js');
const dotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utente = process.env.DB_UTENTE;
const db_password_utente = process.env.DB_PASSWORD_UTENTE;

const registrazione = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT id_utente FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.numero_tel, req.body.email], async (err, _res) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (_res[0].length != 0) {
            res.status(200).send({
                risultato: false,
                messaggio: 'Utente presente, modificare telefono o email'
            });
        } else {
            let cryptoPassword = bcrypt.hashSync(req.body.password, 10)
            db(db_utente, db_password_utente).query('INSERT INTO utenti(nome, cognome, numero_tel, email, password, indirizzo, numero_civico, citta, provincia) VALUES (?,?,?,?,?,?,?,?,?)', [req.body.nome, req.body.cognome, req.body.numero_tel, req.body.email, cryptoPassword, req.body.indirizzo, req.body.numero_civico, req.body.citta, req.body.provincia], async (_err, result) => {
                if (_err) {
                    res.status(400).send({
                        risultato: false,
                        messaggio: _err.message
                    });
                } else if (result.length != 0) {
                    let _id_utente;
                    let _ruolo;
                    db(db_utente, db_password_utente).query('SELECT id_utente, nome, password, ruolo FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.numero_tel, req.body.email], async (_res) => {
                        _id_utente = _res.id_utente;
                        _ruolo = _res.ruolo;
                    });
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
                    res.status(200).send({
                        risultato: true,
                        id_utente: _id_utente,
                        ruolo: _ruolo,
                        nome: req.body.nome,
                        token: bearerToken,
                        scadenzaToken: 1800,
                        messaggio: "Utente Registrato"
                    });
                }
            }
            );
        }
    });


}

module.exports = registrazione;