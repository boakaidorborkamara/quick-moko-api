const {Sequelize} = require('sequelize');


// include vendor model
const db = require('../../config/db_config').vendors_table;


//contain information for response after user implement a specific CRUD action
let res_obj = {code: 0, message: "Ok"};


// Handle creation of vendor on POST
const vendor_create = async (req, res)=>{

    // data from frontend
    let new_vendor_details = req.body;
    console.log(new_vendor_details);

    // save data in db 
    const vendor = await db.create({
        name:"JFK Hospital",
        logo: "link to logo",
        address: "Sinkor" ,
        email: "jfk@gmail.com",
        contact_number: "0334223",
        mobile_money_number: "9922272",
        password: "password232" ,
             
    }); 

    res.status(201).send({code: 0, message: "Loan transaction record added"});

}


// Handle diplay of loan transaction record on GET
// const loan_transaction_list = async (req,res)=>{
//     const loan_transaction = await db.findAll();
//     res.status(200).send({code: 0, loan_transaction}); // send user response 
// }


// export controllers 
module.exports = {
    vendor_create,
    // loan_transaction_list
}