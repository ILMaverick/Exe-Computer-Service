
const express = require('express');
const router = express.Router();
const utenti = require('../controllers/utenti');

// router.use('/', users.getUsers);
router.post('/login', utenti.login);

module.exports = router;