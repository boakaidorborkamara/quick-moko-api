const {Sequelize} = require('sequelize');


// include loan transtactions model
const db = require('../../config/db_config').loan_transactions_table;


//contain information for response after user implement a specific CRUD action
let res_obj = {code: 0, message: "Ok"};


// Handle creation of loan transaction on POST
const loan_transtion_create = async (req, res)=>{

    // data from frontend
    let new_loan_transaction_details = req.body;
    console.log(new_loan_transaction_details);

    // save data in db 
    const client = await db.create({
        amount: new_loan_transaction_details.amount,
        purpose: new_loan_transaction_details.purpose      
    }); 

    res.status(201).send({code: 0, message: "Loan transaction record added"});

}


// Handle diplay of loan transaction record on GET
const loan_transaction_list = async (req,res)=>{
    const loan_transaction = await db.findAll();
    res.status(200).send({code: 0, loan_transaction}); // send user response 
}


// export controllers 
module.exports = {
    loan_transtion_create,
    loan_transaction_list
}