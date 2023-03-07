const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('./dbService');
const dotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utenti = process.env.DB_USER;
const db_password = process.env.DB_USER_PASSWORD;
const token_private = process.env.TOKEN_PRIVATE;


const emailByUserCode = (req, res) => {
    db(db_utenti, db_password).query('SELECT email FROM utenti WHERE codice_utente =?', [req.body.codice_utente], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result) {
            res.status(200).send({
                risultato: true,
                email: result[0].email,
                messaggio: "Email trovata"
            });
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Email non trovata"
            });
        }
    }
    );
}

const userByUserName = (req, res) => {
    db(db_utenti, db_password).query('SELECT * FROM utenti WHERE codice_utente = ? OR numero_tel = ? OR email = ?', [req.body.userName, req.body.userName, req.body.userName], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                id_utente: result[0].id_utente,
                codice_utente: result[0].codice_utente,
                nome: result[0].nome,
                cognome: result[0].cognome,
                numero_tel: result[0].numero_tel,
                email: result[0].email,
                messaggio: "Utente trovato!"
            });
        } else {
            res.status(200).send({
                messaggio: "Utente non trovato!"
            });
        }
    }
    );
}
const login = (req, res) => {
    db(db_utenti, db_password).query('SELECT codice_utente, nome, password FROM utenti WHERE codice_utente = ? OR numero_tel = ? OR email = ?', [req.body.userName, req.body.userName, req.body.userName], async (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            await bcrypt.compare(req.body.password, result[0].password).then((_result) => {
                if (_result) {
                    const bearerToken = jwt.sign({}, fs.readFileSync(path.resolve( __dirname + '/private.key'), 'utf8'), {
                        algorithm: 'RS256',
                        expiresIn: 300
                    });
                    res.status(200)
                        .send({
                            risultato: true,
                            codice_utente: result[0].codice_utente,
                            nome: result[0].nome,
                            token: bearerToken,
                            scadenzaToken: 300,
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

const register = (req, res) => {
    let cryptoPassword = bcrypt.hashSync(req.body.password, 10)
    db(db_utenti, db_password).query('INSERT INTO utenti(nome, cognome, numero_tel, email, password, indirizzo, numero_civico, citta, provincia) VALUES (?,?,?,?,?,?,?,?,?)', [req.body.nome, req.body.cognome, req.body.numero_tel, req.body.email, cryptoPassword, req.body.indirizzo, req.body.numero_civico, req.body.citta, req.body.provincia], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            const bearerToken = jwt.sign({}, process.env.TOKEN_PRIVATE, {
                algorithm: 'RS256',
                expiresIn: 300
            });
            res.status(200).send({
                risultato: true,
                codice_utente: '',
                nome: req.body.nome,
                token: bearerToken,
                scadenzaToken: 300,
                messaggio: "Utente Registrato"
            });
        }
    }
    );

}

const checkUserIfExists = (req, res) => {
    db(db_utenti, db_password).query('SELECT id_utente FROM utenti WHERE codice_utente = ? OR numero_tel = ? OR email = ?', [req.body.userName, req.body.userName, req.body.userName], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                risultato: true,
                messaggio: "Utente esistente!"
            });
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Utente non trovato!"
            });
        }
    }
    );
}

const createToken = (req, res) => {
}

module.exports = { login, register, checkUserIfExists, userByUserName, emailByUserCode };