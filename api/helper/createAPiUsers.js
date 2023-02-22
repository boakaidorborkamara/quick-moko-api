const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

let baseUrl = "https://sandbox.momodeveloper.mtn.com";





let createAPIuser = async ()=>{

    axios.post(`${baseUrl}/v1_0/apiuser`, {
        firstName: 'Fred',
        lastName: 'Flintstone'
    },{
        headers:{
            "X-Reference-Id": uuidv4(),
            "Ocp-Apim-Subscription-Key": "9078543234db4189ab147b6cb62e3199",
            
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

}