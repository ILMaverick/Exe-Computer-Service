const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');
const utentiRouter = require('./routes/utentiRouter.js');
const techRouter = require('./routes/techRouter.js');
const interventiRouter = require('./routes/interventiRouter.js');
const hardwareRouter = require('./routes/hardwareRouter.js');
const login = require('./controllers/login.js');
const registrazione = require('./controllers/registrazione.js');

dotEnv.config({ path: __dirname + '/.env' });

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', login);
app.post('/register', registrazione);
app.use('/users', utentiRouter);
app.use('/tech', techRouter);
app.use('/interventions', interventiRouter);
app.use('/hardware', hardwareRouter);

app.listen(process.env.PORTA_SERVER, () =>
    console.log(`Server EXE online sulla porta:${process.env.PORTA_SERVER}`))