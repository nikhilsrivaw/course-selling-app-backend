const {Router}= require('express');
const jwt = require("jsonwebtoken")

const adminRouter  = Router();
const {adminModel}= require("../db")//
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require('../middleware/admin');

//bxcrypt , zod , jswebtokern 

adminRouter.post("/signup", async function(req,res){
    const {email , password , firstName , lastName}  = req.body;
    
    try{
        await adminModel.create({
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
adminRouter.post("/signin",async function(req,res){
    const {email , password } = req.body;

    const admin = await  adminModel.findOne({
        email:email,
        password:password
    });

    if(admin){
        const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD);
        
        res.json({
            token:token
        })


    }else{
        res.status(403).json({
            message: "incoorrect credentials"
        })
    }
    
})
adminRouter.post("/course",adminMiddleware, async function(req,res){

    const adminId = req.userId;
    const {title ,  description , imageUrl , price } = req.body;

    const course = await courseModel.create({
        title,description,imageUrl,price,adminId
    })
    res.json({
        message : "Course created ",
        courseId : course._id
    })
})
adminRouter.put("/course", function(req,res){
    res.json({
        message : "admin added"
    })
})

adminRouter.get("/course/bulk", function(req,res){
    res.json({
        message : "admin added"
    })
})

module.exports={
    adminRouter:adminRouter
}