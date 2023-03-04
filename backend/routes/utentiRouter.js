
const express = require('express');
const router = express.Router();
const cors = require('cors')
const utenti = require('../controllers/utenti');


router.use(cors());
router.use(express.json())

// router.use('/', users.getUsers);
router.post('/login', utenti.login);
router.post('/register', utenti.register);
router.post('/check', utenti.checkUserIfExists);
router.post('/byusername', utenti.userByUserName);
router.get('/usercode/:id', utenti.userCodeById );
router.post('/userID/username', utenti.userIdByUserName );

module.exports = router;