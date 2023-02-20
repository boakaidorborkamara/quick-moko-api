const generator = require('generate-password');


// Generates a new password for each registered user 
function generateRegisteredUserPassword(){
    // generate new password 
    let password = generator.generate({
        length: 10,
        numbers: true
    });
}


module.exports = {generateRegisteredUserPassword};