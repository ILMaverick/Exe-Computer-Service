const express = require('express');
const router = express.Router();
const cors = require('cors')
const hardware = require('../controllers/hardware.js');

router.use(express.json())

router.get('/harwares', hardware.getHardwares);
router.post('/hardwares/userName', hardware.getHardwaresByUtente);
router.post('/hardwares/codiceHardware', hardware.getHardwareByCodiceHardware);
router.post('/hardwares/idHardware', hardware.getHardwareByIdHardware);

module.exports = router;