const {createAPIuser,validateAPIuser,tempGenerateAcessToken,createAccessToken} = require('../helper/implementPayments');

const handleDeposit = async (req, res)=>{
    try{
        // await createAPIuser();
        // await validateAPIuser();
        let api_key = await tempGenerateAcessToken ();
        // console.log("api key in controller", api_key);
        res.send({"message":"backend working"});
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    handleDeposit
}