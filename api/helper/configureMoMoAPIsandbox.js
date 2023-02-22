require('dotenv').config();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const base64 = require('base64-string');


let baseUrl = "https://sandbox.momodeveloper.mtn.com";
let x_refrence_id  = uuidv4();


// Implement creation of new api user 
let createAPIuser = async ()=>{

    // make a post request to sandbox while providing all details needed for a sucessful request 
    axios.post(`${baseUrl}/v1_0/apiuser`, {
        "providerCallbackHost": "quickmoko.com"
      },{
        headers:{
            "X-Reference-Id": x_refrence_id,
            "Ocp-Apim-Subscription-Key": process.env.DISBURSEMENT_PRIMARY_KEY,
            
        }
    })
    .then(function (response) {
        console.log(response);

        // return 0 if reques was sucessful 
        if(response.data){
            return 0
        }
    })
    .catch(function (error) {
        console.log(error);
        // return 1 if request wasn't sucessful 
        return 1
    });


}


// Validates if API user was actually created 
let validateAPIuser = async ()=>{

    // make a post request to sandbox while providing all details needed for a sucessful request 
    axios.get(`${baseUrl}/v1_0/apiuser/${x_refrence_id}`, {
        "providerCallbackHost": "quickmoko.com"
      },{
        headers:{

            "Ocp-Apim-Subscription-Key": process.env.DISBURSEMENT_PRIMARY_KEY,
            
        }
    })
    .then(function (response) {
        console.log(response);

        // return 0 if reques was sucessful 
        if(response.data){
            return 0
        }
    })
    .catch(function (error) {
        console.log(error);
        // return 1 if request wasn't sucessful 
        return 1
    });
}


// Implement creation of api key for api user in the sandbox 
let createAPIkey = async ()=>{

    // make a post request to sandbox while providing all details needed for a sucessful request 
    axios.post(`${baseUrl}/v1_0/apiuser/${x_refrence_id}/apikey`, {
        
      },{
        headers:{

            "Ocp-Apim-Subscription-Key": process.env.DISBURSEMENT_PRIMARY_KEY,
            
        }
    })
    .then(function (response) {
        console.log(response);

        // return 0 if reques was sucessful 
        if(response.data){
            return 0
        }
    })
    .catch(function (error) {
        console.log(error);
        // return 1 if request wasn't sucessful 
        return 1
    });


}


// Implement creation of api key for api user in the sandbox 
let createAccessToken = async ()=>{

    let api_key = await createAPIkey();
    let cutomized_base64_string = `${x_refrence_id}:${api_key}`
    
    // make a post request to sandbox while providing all details needed for a sucessful request 
    axios.post(`${baseUrl}/v1_0/apiuser/${x_refrence_id}/apikey`, {
        
      },{
        headers:{

            "Authorization": "base64 string here",
            "Ocp-Apim-Subscription-Key": process.env.DISBURSEMENT_PRIMARY_KEY,
            
        }
    })
    .then(function (response) {
        console.log(response);

        // return 0 if reques was sucessful 
        if(response.data){
            return 0
        }
    })
    .catch(function (error) {
        console.log(error);
        // return 1 if request wasn't sucessful 
        return 1
    });


}


module.exports = {
    createAPIuser,
    validateAPIuser,
    createAPIkey,
    createAccessToken
};