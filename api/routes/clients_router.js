const express = require('express');
const router = express.Router();


// bring controller codes into this file 
const clientsController = require('../controllers/clientController')


//create new client on post
router.post('/api/v1/clients', clientsController.client_create);

//get all clients
router.get('/api/v1/clients', clientsController.client_list);



module.exports = router;