const {Sequelize} = require('sequelize');


// include loan transtactions model
const db = require('../../config/db_config').payment_transactions_table;


//contain information for response after user implement a specific CRUD action
let res_obj = {code: 0, message: "Ok"};


// Handle creation of payment transaction on POST
const payment_transtion_create = async (req, res)=>{

    // data from frontend
    let new_payment_transaction_details = req.body;
    console.log(new_payment_transaction_details);

    // save data in db 
    const payment_transaction = await db.create({
              amount: "300"
    }); 

    res.status(201).send({code: 0, message: "Payment transaction record added"});

}


// Handle diplay of loan transaction record on GET
const loan_transaction_list = async (req,res)=>{
    const loan_transaction = await db.findAll();
    res.status(200).send({code: 0, loan_transaction}); // send user response 
}


// export controllers 
module.exports = {
    payment_transtion_create,
    // loan_transaction_list
}