const db = require('../database/dbService');
const dotEnv = require('dotenv');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utente = process.env.DB_UTENTE;
const db_password_utente = process.env.DB_PASSWORD_UTENTE;
const db_tech = process.env.DB_TECH;
const db_password_tech = process.env.DB_PASSWORD_TECH;

const setHardware = (req, res) => {
    db(db_tech, db_password_tech).query('INSERT INTO harware(id_utente_fk, tipologia, modello) VALUES (?,?,?)', [req.body.id_utente, req.body.tipologia, req.body.modello], async (err, result) => {
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

const getHardwares = (req, res) => {
    db(db_tech, db_password_tech).query('SELECT * FROM hardware', (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                hardware: result,
                messaggio: "hardware trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Nessun hardware!"
            });
        }
    }
    );
}

const getHardwaresByUtente = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT * FROM hardware WHERE id_utente_fk = ?', [req.body.id_utente], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                hardware: result,
                messaggio: "hardware trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Nessun hardware!"
            });
        }
    }
    );
}

const getHardwareByIdHardware = (req, res) => {
    db(db_tech, db_password_tech).query('SELECT * FROM hardware WHERE id_hardware = ?', [req.body.id_hardware], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                hardware: result[0],
                messaggio: "hardware trovati!"
            });
        } else {
            res.status(200).send({
                messaggio: "Nessun hardware!"
            });
        }
    }
    );
}

module.exports = {getHardwares, getHardwaresByUtente, getHardwareByIdHardware, setHardware}

