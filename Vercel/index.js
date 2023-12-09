require("dotenv").config()
const express = require('express');
const cors = require('cors');

const Mainroutes = require('./routes/routes')
const errorHandler = require('./utils/errorHandler');

require("./config/db")

const app = express();


app.use(cors());
app.use(express.json());
app.use('/', Mainroutes)
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Run on ${PORT} ...`)
});