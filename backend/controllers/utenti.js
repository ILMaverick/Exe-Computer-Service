const db = require('../database/dbService');
const dotEnv = require('dotenv');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utente = process.env.DB_UTENTE;
const db_password_utente = process.env.DB_PASSWORD_UTENTE;
const db_tech = process.env.DB_TECH;
const db_password_tech = process.env.DB_PASSWORD_TECH;

const getUtenti = (req, res) => {
    db(db_tech, db_password_tech).query('SELECT * FROM utenti', (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                risultato: true,
                utenti: result,
                messaggio: "Utenti trovati!"
            });
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Nessun utente!"
            });
        }
    });
}

const getIdUtenteByUserName = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT id_utente FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.userName, req.body.userName], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                risultato: true,
                id_utente: result[0].id_utente,
                messaggio: "Utente trovato!"
            });
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Utente non trovato!"
            });
        }
    });
}

const getRuoloByIdUtente = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT ruolo FROM utenti WHERE id_utente = ?', [req.body.id_utente], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
        } else if (result.length != 0) {
            res.status(200).send({
                risultato: true,
                ruolo: result[0].ruolo
            });
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Ruolo non trovato!"
            });
        }
    });
}

const getUtenteByIdUtente = (req, res) => {
    db(db_utente, db_password_utente).query('SELECT * FROM utenti WHERE id_utente = ?', [req.body.id_utente], (err, result) => {
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
                indirizzo: result[0].indirizzo,
                numero_civico: result[0].numero_civico,
                citta: result[0].citta,
                provincia: result[0].provincia,
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

module.exports = { getUtenti, getIdUtenteByUserName, getUtenteByIdUtente, getRuoloByIdUtente };