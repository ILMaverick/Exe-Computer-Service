const express = require('express');
const router = express.Router();
const aggiornamenti = require('../controllers/aggiornamenti.js');
const authentication = require('./../autenticazione/autenticazioneToken');

router.use(express.json())

router.post('/idAggiornamento', authentication, aggiornamenti.getAggiornamentoByIdAggiornamento);
router.post('/idIntervento', authentication, aggiornamenti.getAggiornamentiByIntervento);

module.exports = router;