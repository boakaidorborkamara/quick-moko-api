const express = require('express');
const router = express.Router();


// bring controller codes into this file 
const vendorController = require('../controllers/vendorsController')


//create new loan transaction record on post
router.post('/api/v1/vendors', vendorController.vendor_create);


//get all loan transactions
// router.get('/api/v1/loan_transactions', loanTransactionController.loan_transaction_list);



module.exports = router;