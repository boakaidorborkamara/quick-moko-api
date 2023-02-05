const {Sequelize} = require('sequelize');


// include client model
const db = require('../../config/db_config').clients_table;


//contain information for response after user implement a specific CRUD action
let res_obj = {code: 0, message: "Ok"};


// Handle creation of client on POST
const client_create = async (req, res)=>{

    // data from frontend
    let new_client_details = req.body;
    console.log(new_client_details);

    const client = await db.create({
        first_name:new_client_details.first_name,
        middle_name: new_client_details.middle_name,
        last_name: new_client_details.last_name,
        date_of_birth: new_client_details.date_of_birth,
        salary_deposit_to_mobile_money: new_client_details.salary_deposit_to_mobile_money,
        monthly_salary: new_client_details.monthly_salary,
        home_address: new_client_details.home_address,
        employment_contract:new_client_details.employment_contract,
        employment_letter: new_client_details.employment_letter,
        image: new_client_details.image,
        national_id: new_client_details.national_id,
        national_identifcation_number: new_client_details.national_identifcation_number,
        gurantor_fullname: new_client_details.gurantor_fullname,
        gurantor_contact_number:new_client_details.gurantor_contact_number,
        gurantor_home_address: new_client_details.gurantor_home_address,
        gurantor_relation_to_creditor: new_client_details.gurantor_relation_to_creditor,
        mou_from_gurantor:new_client_details.mou_from_gurantor,
        gurantor_government_issued_id: new_client_details.gurantor_government_issued_id,
        hr_fullname: new_client_details.hr_fullname,
        hr_contact_number: new_client_details.hr_contact_number,
        employer_name: new_client_details.employer_name,
        employer_address: new_client_details.employer_address,
        loan_limit: new_client_details.loan_limit,
        validation_process_complete: new_client_details.validation_process_complete,
        pass_validation: new_client_details.pass_validation,
        terms_and_condition_accepted: new_client_details.terms_and_condition_accepted,


    });

    res.status(201).send({code: 0, message: "Client Added"});

}


// // Handle diplay of client on GET
const client_list = async (req,res)=>{
    const clients = await db.findAll();
    res.status(200).send({code: 0, clients}); 
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
    client_create,
    client_list,
    client_details,
    client_edit,
    client_delete
}