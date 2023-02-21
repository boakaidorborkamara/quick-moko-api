const express = require('express');
const { json } = require('sequelize');

// include client model
const db = require('../../config/db_config').clients_table;


let res_obj = {code: 0, message:"modify message"};



let logUserIn = async (req, res)=>{

    // extract login credentials from request body 
    const {momo_number, password} = req.body;


    // Check if user provided both momo number and password 
    if(!momo_number || !password){
        res_obj.code = 1;
        res_obj.message = "Momo Number and Passwords are required"
        res.status(400).send(JSON.stringify(res_obj));
    }


    try{

        //check in database if the user already exist
        let existing_user = await db.findOne({
            where: {mobile_money_number: momo_number}
        });

        console.log("EXISTING USER:", existing_user);
        if(!existing_user){
            res_obj.code = 1;
            res_obj.message = "Can not login, invalid Momo Number or Password. ";
            res_obj = JSON.stringify(res_obj);
            res.send(res_obj);
        }
        else{

            // comparing given password with hashed password
            if(bcrypt.compare(password, existing_user.password)){
                res.status(200).json({
                    message: "Login successful",
                    existing_user,
                })
            }
            
        }
    }
    catch(err){
        console.log(err)
    }

}



module.exports = {logUserIn}