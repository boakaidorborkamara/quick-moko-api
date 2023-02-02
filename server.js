const express = require('express');
const db_config = require('./db_config/db_config');

//define port
const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})