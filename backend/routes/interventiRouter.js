const express = require('express');
const router = express.Router();
const interventi = require('../controllers/interventi.js');

router.use(express.json())

router.get('/', interventi.getInterventi);
router.post('/utente', interventi.getInterventiByUtente);
router.post('/idIntervento', interventi.getInterventoByIdIntervento);
router.post('/statoIntervento', interventi.getInterventiByStatoIntervento);

module.exports = router;