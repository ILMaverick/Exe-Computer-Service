const express = require('express');
const router = express.Router();
const tech = require('../controllers/tech.js');
const authentication = require('./../autenticazione/autenticazioneToken');

router.use(express.json())


module.exports = router;