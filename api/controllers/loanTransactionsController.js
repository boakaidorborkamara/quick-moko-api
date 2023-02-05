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


//Handle display of specific client on GET
const client_details = async (req, res)=>{

    // id for the client that detail you want to see 
    let client_id = req.params.id;
    console.log(client_id);
     
    
    const client = await db.findByPk(client_id);
    // check if id is invalid 
    if (client === null) {

        // modify res obj 
        res_obj.code = 1;
        res_obj.message = "Client not valid";

        res.status(400).send(res_obj);

    } else {
        
        // modify res obj 
        res_obj.code = 0;
        res_obj.message = client;

        res.status(200).send(JSON.stringify(res_obj));
    }

    res.send(JSON.stringify(client_id));
}


// Handle edit of specific client details on PUT 
const client_edit = async (req, res)=>{

    // id for client who info we want to edit 
    let client_id = req.params.id;

    //new info for modification
    let new_info = req.body;
    console.log(new_info);


    await db.update(new_info,{
        where:{
            id:client_id
        }
    });


    // modify request obj 
    res_obj.code = 0;
    res_obj.message = "Client modified"

    res.status(200).send(JSON.stringify(res_obj));
}


//Handle delete of specific client on DELETE
const client_delete = async (req, res)=>{
    
    // id for person info we want to edit 
    let client_id = req.params.id;

    await db.destroy({
        where: {
            id: client_id
        }
    });

    // modify res_obj 
    res_obj.code = 0;
    res_obj.message = "Success, client deleted.";

    res.status(200).send(JSON.stringify(res_obj));
}


// export controllers 
module.exports = {
    loan_transtion_create,
    loan_transaction_list
}