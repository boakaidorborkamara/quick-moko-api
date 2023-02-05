const express = require('express');
const router = express.Router();


// bring controller codes into this file 
const loanTransactionController = require('../controllers/loanTransactionsController')


//create new loan transaction record on post
router.post('/api/v1/loan_transactions', loanTransactionController.loan_transtion_create);

//get all loan transactions
router.get('/api/v1/loan_transactions', loanTransactionController.loan_transaction_list);

//Handle display of details for specific client on GET
// router.get('/api/v1/clients/:id', clientsController.client_details);

// Handle edit of specific client details on PUT 
// router.put('/api/v1/clients/:id', clientsController.client_edit);

//Handle delete of specific client on DELETE
// router.delete('/api/v1/clients/:id', clientsController.client_delete);



module.exports = router;