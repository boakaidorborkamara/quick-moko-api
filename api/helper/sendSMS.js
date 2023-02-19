const axios = require('axios');


const sendSmsNotifications = (receipt_number, message)=>{

    // generate message id 
    let message_id = 0;

    // configure message 
    let new_message = {
        senderName: "Sogital Lab",
        messages: [
          {
            to: receipt_number,
            body: message,
            extMessageId: message_id++
          }
        ]
    }

    // convert new message object to json 
    let converted_new_message = JSON.stringify(new_message);


    //send new sms
    axios.post('https://developer.lonotalk.com/api/v1/sms', converted_new_message, {
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
    sendSmsNotifications
}