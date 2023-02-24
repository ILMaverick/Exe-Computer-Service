
const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.use('/', users.getUser);

module.exports = router;