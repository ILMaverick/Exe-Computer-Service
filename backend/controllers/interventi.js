const db = require('../database/dbService');
const dotEnv = require('dotenv');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utente = process.env.DB_UTENTE;
const db_password_utente = process.env.DB_PASSWORD_UTENTE;
const db_tech = process.env.DB_TECH;
const db_password_tech = process.env.DB_PASSWORD_TECH;

const setIntervento = (req, res) => {
    db(db_tech, db_password_tech).query('INSERT INTO interventi(id_utente_fk, id_tech_fk, id_hardware_fk, descrizione) VALUES (?,?,?,?)', [req.body.id_utente, req.body.id_tech, req.body.id_hardware, req.body.descrizione], async (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                risultato: true,
                messaggio: "hardware inserito!"
            });
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Nessun hardware inserito!"
            });
        }
    }
    );
}

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
                messaggio: "Nessun Intervento!"
            });
        }
    }
    );
}

const getInterventiByHardware = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT * FROM interventi WHERE id_hardware = ?', [req.body.id_hahrdware], (err, result) => {
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
                messaggio: "Nessun Intervento!"
            });
        }
    }
    );
}

const getInterventiByUtente = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT * FROM interventi WHERE id_utente_fk = ?', [req.body.id_utente], (err, result) => {
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
                messaggio: "Nessun Intervento!"
            });
        }
    }
    );
}

const getInterventoByIdIntervento = (req, res) => {
    db(db_tech, db_password_tech).query('SELECT * FROM interventi WHERE id_intervento = ?', [req.body.id_intervento], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                interventi: result[0],
                messaggio: "interventi trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Nessun Intervento!"
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
                messaggio: "Nessun Intervento!"
            });
        }
    }
    );
}

module.exports = { getInterventiByStatoIntervento, getInterventiByUtente, getInterventi, getInterventoByIdIntervento, getInterventiByHardware, setIntervento };