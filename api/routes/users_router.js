const express = require('express');
// const db = require('../../config/db_config');
const router = express.Router();


// const usersController = require('../controllers/indexController')


//display all clients on GET
router.get('/api/v1/clients', (req, res)=>{
    res.send("Sending all clients");
})


module.exports = router;