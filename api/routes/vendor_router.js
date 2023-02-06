const express = require('express');
const router = express.Router();


// bring controller codes into this file 
const vendorController = require('../controllers/vendorsController')


//create new vendor on post
router.post('/api/v1/vendors', vendorController.vendor_create);


//get all vendors
router.get('/api/v1/vendors', vendorController.vendor_list);



module.exports = router;