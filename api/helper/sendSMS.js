const axios = require('axios');


const sendSmsNotifications = (receipt_number, message)=>{

    console.log("working");

    let message_id = 0;

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

    axios.post('https://httpbin.org/post', {

        "senderName": "Kwagei",
        "messages": [
          {
            "to": "0776001001",
            "body": "Hello world!",
            "extMessageId": "<extMessageId>"
          }
        ]
      }, {
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