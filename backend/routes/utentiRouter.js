const express = require('express');
const router = express.Router();
const cors = require('cors')
const utenti = require('../controllers/utenti.js');
const authentication = require('./../autenticazione/autenticazioneToken');

router.use(express.json())

router.get('/userId/userName', authentication, utenti.getIdUtenteByUserName);
router.post('/userId/userName', authentication, utenti.getIdUtenteByUserName);
router.post('/byUserId', authentication, utenti.getUtenteByIdUtente);

module.exports = router;