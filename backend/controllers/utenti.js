const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../database/dbService');
const dotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotEnv.config({ path: __dirname + '/../.env' });

const db_utenti = process.env.DB_USER;
const db_password = process.env.DB_USER_PASSWORD;

const getUserIdByUserName = (req, res) => {
    db(db_utenti, db_password).query('SELECT id_utente, ruolo FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.userName, req.body.userName], (err, result) => {
        if (err) {
            res.status(400).send({
                messaggio: err.message
            });
            return false;
        } else if (result.length != 0) {
            res.status(200).send({
                risultato: true,
                id_utente: result[0].id_utente,
                ruolo: result[0].ruolo,
                messaggio: "Utente trovato!"
            });
            return true;
        } else {
            res.status(200).send({
                risultato: false,
                messaggio: "Utente non trovato!"
            });
            return false;
        }
    });
}

const getRoleByUserId = (req, res) => {
    db(db_utenti, db_password).query('SELECT ruolo FROM utenti WHERE id_utente = ?', [req.body.id_utente], (err, result) => {
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
                messaggio: "Utente non trovato!"
            });
        }
    });
}

const userByUserName = (req, res) => {
    db(db_utenti, db_password).query('SELECT * FROM utenti WHERE numero_tel = ? OR email = ?', [req.body.userName, req.body.userName], (err, result) => {
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

module.exports = { getUserIdByUserName, userByUserName, getRoleByUserId };