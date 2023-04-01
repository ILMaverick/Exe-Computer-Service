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
        } else if (_res.length != 0) {
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
                    res.status(200).send({
                        risultato: true,
                        messaggio: "Utente Registrato"
                    });
                }
            }
            );
        }
    });


}

module.exports = registrazione;