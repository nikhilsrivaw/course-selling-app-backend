const {Router}= require('express');

const adminRouter  = Router();
const {adminModel}= require("../db")

adminRouter.post("/signup", function(req,res){
    res.json({
        message : "admin added"
    })
})
adminRouter.post("/signin", function(req,res){
    res.json({
        message : "admin added"
    })
})
adminRouter.post("/course", function(req,res){
    res.json({
        message : "admin added"
    })
})
adminRouter.put("/course", function(req,res){
    res.json({
        message : "admin added"
    })
})

adminRouter.get("/course", function(req,res){
    res.json({
        message : "admin added"
    })
})

module.exports={
    adminRouter:adminRouter
}