const express = require('express');
const router = express.Router();
const cors = require('cors')
const tech = require('../controllers/tech.js');

router.use(cors());
router.use(express.json())

router.get('/intervents', tech.getInterventi);
router.post('/intervents/state', tech.getInterventiByStatoIntervento);
router.post('/hardwares', tech.getHardwaresByUserName);

module.exports = router;