const { Router } = require("express");
const express = require('express')
const app = express();
const {userModel} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config")

const userRouter = Router();



userRouter.post("/signup", async function (req, res) {
    const {email , password , firstName , lastName}  = req.body;
    
    try{
        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
    
        });
        res.json({
            message: "signup succeded"
        })
        
    }catch (error) {
        res.status(500).json({ message: "Signup failed", error: error.message });
    };
    

   


})
userRouter.post("/signin",async function (req, res) {
    const {email , password } = req.body;

    const user = await  userModel.findOne({
        email:email,
        password:password
    });

    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);
        
        res.json({
            token:token
        })


    }else{
        res.status(403).json({
            message: "incoorrect credentials"
        })
    }
    
})
userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "signup endpoint"
    })

})


module.exports = {
    userRouter: userRouter
}