const express = require('express');
const router = express.Router();
const cors = require('cors')
const tech = require('../controllers/tech.js');

router.use(express.json())


module.exports = router;