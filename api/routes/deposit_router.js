const express = require('express');
const router = express.Router();


// bring deposit controller codes into this file 
const clientsController = require('../controllers/clientController')


//create new client on post
router.post('/api/v1/deposit', clientsController.client_create);