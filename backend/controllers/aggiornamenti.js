const db = require('../database/dbService');
const dotEnv = require('dotenv');
const path = require('path');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utente = process.env.DB_UTENTE;
const db_password_utente = process.env.DB_PASSWORD_UTENTE;
const db_tech = process.env.DB_TECH;
const db_password_tech = process.env.DB_PASSWORD_TECH;

const getAggiornamentiByIntervento = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT * FROM aggiornamenti WHERE id_interv_fk = ?', [req.body.id_intervento], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                aggiornamenti: result,
                messaggio: "Aggiornamenti trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Nessun aggiornamento!"
            });
        }
    }
    );
}

const getAggiornamentoByIdAggiornamento = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT * FROM Aggiornamenti WHERE id_aggiornamento = ?', [req.body.id_aggiornamento], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                aggiornamenti: result[0],
                messaggio: "Aggiornamenti trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Nessun aggiornamento!"
            });
        }
    }
    );
}

module.exports = { getAggiornamentiByIntervento, getAggiornamentoByIdAggiornamento };