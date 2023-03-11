const express = require('express');
const router = express.Router();
const hardware = require('../controllers/hardware.js');

router.use(express.json())

router.get('/', hardware.getHardwares);
router.post('/userName', hardware.getHardwaresByUtente);
router.post('/idHardware', hardware.getHardwareByIdHardware);

module.exports = router;