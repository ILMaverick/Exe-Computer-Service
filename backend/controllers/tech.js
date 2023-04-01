const db = require('../database/dbService');
const dotEnv = require('dotenv');
const path = require('path');

dotEnv.config({ path: __dirname + '/../.env' });

const db_tech = process.env.DB_TECH;
const db_password_tech = process.env.DB_PASSWORD_TECH;

const getInterventi = (req, res) => {
    db(db_tech, db_password_tech).query('SELECT * FROM interventi', (err, result) => {
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
    db(db_tech, db_password_tech).query('SELECT * FROM interventi WHERE stato_intervento = ?', [req.body.stato_intervento], (err, result) => {
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

module.exports = { getInterventiByStatoIntervento, getInterventi };