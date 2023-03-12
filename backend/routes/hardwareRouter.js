const express = require('express');
const router = express.Router();
const hardware = require('../controllers/hardware.js');
const authentication = require('./../autenticazione/autenticazioneToken');

router.use(express.json())

router.get('/', authentication, hardware.getHardwares);
router.post('/utente', authentication, hardware.getHardwaresByUtente);
router.post('/idHardware', authentication, hardware.getHardwareByIdHardware);

module.exports = router;