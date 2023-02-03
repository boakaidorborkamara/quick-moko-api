const express = require('express');
const db_config = require('./db_config/db_config');

//define port
const PORT = process.env.PORT || 3000;

const app = express();


const index_routers = require('./routers/index_router');


app.use(index_routers);


app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})