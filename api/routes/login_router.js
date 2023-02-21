const express = require('express');
const router = express.Router();


//implement login on post
router.post('/api/v1/login', (req,res)=>{
    res.send({"msg": "working"});
});