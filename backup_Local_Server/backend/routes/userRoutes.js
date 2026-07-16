const express = require('express')
const router = express.Router();
const User = require("../model/User");

router.get("/",async(req , res , next)=>{
    res.json({
        "Message":"Hello I am reining get method"
    })
})

router.get("/about-us", async(req , res , next)=>{
    try{
        const response = await User.find({})
        res.status(200).json({
            record:response
        });
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;