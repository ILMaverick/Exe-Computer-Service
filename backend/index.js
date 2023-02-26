const express = require('express');
const usersRouter = require('./routes/usersRouter')
const cors = require('cors')
const dotEnv = require('dotenv');

dotEnv.config({ path: '.env' });

const app = express();

app.use(express.json())
app.use(cors());

app.use('/users', usersRouter);
// app.use('/interventions', interventionsRouter);
// app.use('/hardware', hardwareRouter);
// app.use('/comm', commRouter);
// app.use('/tech', techRouter);

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server EXE running on port:${process.env.SERVER_PORT}`))