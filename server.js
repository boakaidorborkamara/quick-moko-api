const express = require('express');
const db = require('./config/db_config');


//define port
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//ROUTES
const index_routers = require('./api/routes/index_router');
const client_routers = require('./api/routes/clients_router');
const loan_transactions_router = require('./api/routes/loan_transactions_router');
const payment_transactions_router = require('./api/routes/payment_transactions_router');
// const vendors_router = require('./api/routes/');



app.use(index_routers);
app.use(client_routers);
app.use(loan_transactions_router);
app.use(payment_transactions_router);


app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})