const db = require('../database/dbService');
const dotEnv = require('dotenv');
const path = require('path');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utenti = process.env.DB_TECH;
const db_password = process.env.DB_TECH_PASSWORD;

const getInterventi = (req, res) => {
    db(db_utenti, db_password).query('SELECT * FROM interventi', (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                interventi: result,
                messaggio: "interventi trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Interventi non trovati!"
            });
        }
    }
    );
}

const getInterventiByStatoIntervento = (req, res) => {
    db(db_utenti, db_password).query('SELECT * FROM interventi WHERE stato_intervento = ?', [req.body.stato_intervento], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                interventi: result,
                messaggio: "interventi trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "interventi non trovati!"
            });
        }
    }
    );
}

const getHardwaresByUserName = (req, res) => {
    db(db_utenti, db_password).query('SELECT * FROM harware WHERE numero_tel = ? OR email = ?', [req.body.userName, req.body.userName], (err, result) => {
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

module.exports = { getInterventiByStatoIntervento, getHardwaresByUserName, getInterventi };