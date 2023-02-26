
const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

// router.use('/', users.getUsers);
router.post('/login', users.login);

module.exports = router;