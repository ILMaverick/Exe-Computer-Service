const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('./../database/dbService.js');
const dotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utenti = process.env.DB_USER;
const db_password = process.env.DB_USER_PASSWORD;

const register = (req, res) => {
    let cryptoPassword = bcrypt.hashSync(req.body.password, 10)
    db(db_utenti, db_password).query('INSERT INTO utenti(nome, cognome, numero_tel, email, password, indirizzo, numero_civico, citta, provincia) VALUES (?,?,?,?,?,?,?,?,?)', [req.body.nome, req.body.cognome, req.body.numero_tel, req.body.email, cryptoPassword, req.body.indirizzo, req.body.numero_civico, req.body.citta, req.body.provincia], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            const bearerToken = jwt.sign({}, fs.readFileSync(path.resolve(__dirname + '/private.key'), 'utf8'), {
                algorithm: 'RS256',
                expiresIn: 300
            });
            res.status(200).send({
                risultato: true,
                nome: req.body.nome,
                token: bearerToken,
                scadenzaToken: 300,
                messaggio: "Utente Registrato"
            });
        }
    }
    );

}

module.exports = register;