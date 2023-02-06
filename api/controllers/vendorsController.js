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
        name:new_vendor_details.name,
        logo: new_vendor_details.logo, 
        address: new_vendor_details.address ,
        email: new_vendor_details.email, 
        contact_number: new_vendor_details.contact_number,
        mobile_money_number: new_vendor_details.mobile_money_number,
        password: new_vendor_details.password ,
            
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