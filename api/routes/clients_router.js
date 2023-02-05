const express = require('express');
const router = express.Router();


// bring controller files into this file 
const clientsController = require('../controllers/clientController')


//create new client on post
router.post('/api/v1/clients', clientsController.client_create);


module.exports = router;