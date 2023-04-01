const express = require('express');
const router = express.Router();
const utenti = require('../controllers/utenti.js');
const authentication = require('./../autenticazione/autenticazioneToken');

router.use(express.json())

router.get('/', authentication, utenti.getUtenti);
router.post('/idUtente/userName', authentication, utenti.getIdUtenteByUserName);
router.post('/utente/idUtente', authentication, utenti.getUtenteByIdUtente);

module.exports = router;