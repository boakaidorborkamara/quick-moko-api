const express = require('express');
const db = require('./config/db_config');


//define port
const PORT = process.env.PORT || 3000;

const app = express();


//ROUTES
const index_routers = require('./api/routes/index_router');
const client_routers = require('./api/routes/clients_router');


app.use(index_routers);
app.use(client_routers);


app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})