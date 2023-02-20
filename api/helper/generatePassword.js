const generator = require('generate-password');


// Generates a new password for each registered user 
let generateRegisteredUserPassword = async()=>{
    // generate new password 
    console.log("Password generator working")
    let password = await generator.generate({
        length: 10,
        numbers: true
    });

    console.log(password);

    return password;
}


module.exports = {generateRegisteredUserPassword};