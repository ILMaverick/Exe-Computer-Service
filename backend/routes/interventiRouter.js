const express = require('express');
const router = express.Router();
const interventi = require('../controllers/interventi.js');
const authentication = require('./../autenticazione/autenticazioneToken');

router.use(express.json())

router.get('/', authentication, interventi.getInterventi);
router.post('/utente', authentication, interventi.getInterventiByUtente);
router.post('/idIntervento', authentication, interventi.getInterventoByIdIntervento);
router.post('/statoIntervento', authentication, interventi.getInterventiByStatoIntervento);

module.exports = router;