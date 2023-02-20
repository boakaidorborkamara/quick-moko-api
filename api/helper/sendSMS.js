const axios = require('axios');

// generate message id 
let message_id = 0;

const registrationSucessfulSmsNotification = async (receipt_number, receipt_name)=>{

    // increment message id 
    message_id++;

    // configure message 
    let new_message = {
        senderName: "QuickMoko",
        messages: [
          {
            to: receipt_number,
            body: `Thanks ${receipt_name} for registering with QuickMoko. Your application will be review and we will get back to you after 48 hours.`,
            extMessageId: message_id
          }
        ]
    }

    console.log(new_message)


    // convert new message object to json 
    let converted_new_message = JSON.stringify(new_message);
    console.log(converted_new_message);


    //send new sms
    await axios.post('https://developer.lonotalk.com/api/v1/sms', converted_new_message, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'apiKey': 'tCvqgcZp0faUyBWRzbCln7O6H6SoeSnhT5A6L57SeZRnaUe2Dkce6yZyYBo5xXXU'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}




module.exports = {
    registrationSucessfulSmsNotification
}