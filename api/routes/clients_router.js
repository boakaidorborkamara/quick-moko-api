const express = require('express');
const router = express.Router();


const clientsController = require('../controllers/clientController')


//display all clients on GET
router.get('/api/v1/clients', clientsController.client_create);


module.exports = router;