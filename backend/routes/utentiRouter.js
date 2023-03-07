const express = require('express');
const router = express.Router();
const cors = require('cors')
const utenti = require('../controllers/utenti.js');
const checkIfAuthenticated = require('../autenticazione/autenticazioneToken.js')

router.use(cors());
router.use(express.json())

// router.use('/', users.getUsers);
router.post('/userId/userName', utenti.getUserIdByUserName);
router.post('/byusername', utenti.userByUserName);

module.exports = router;