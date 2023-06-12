const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.port
const app = express();


app.use('/',require('./routes/routes'))
app.listen(port||5000,()=>{
    console.log(`servidor en http://localhost:${port}`)
});

