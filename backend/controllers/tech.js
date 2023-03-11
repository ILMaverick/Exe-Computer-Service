const db = require('../database/dbService');
const dotEnv = require('dotenv');
const path = require('path');

dotEnv.config({ path: __dirname + '/../.env' });

const db_tech = process.env.DB_TECH;
const db_password_tech = process.env.DB_PASSWORD_TECH;



module.exports = { getInterventiByStatoIntervento, getHardwaresByUserName, getInterventi };