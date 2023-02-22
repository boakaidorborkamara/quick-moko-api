const express = require('express');
const router = express.Router();


// bring deposit controller codes into this file 
const depositController = require('../controllers/depositController');


//create new client on post
router.get('/api/v1/deposit', depositController.handleDeposit);


module.exports = router;