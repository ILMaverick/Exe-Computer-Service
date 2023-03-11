const express = require('express');
const router = express.Router();
const interventi = require('../controllers/interventi.js');

router.use(express.json())

router.get('/intervents', interventi.getInterventi);
router.post('/intervents/state', interventi.getInterventiByStatoIntervento);

module.exports = router;