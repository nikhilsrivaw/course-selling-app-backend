const express = require('express');

const app = express()

app.post("/user/sign-in", function(req,res){

    res.json({
        message:"signup endpoint"
    })


})
app.post("/users/sign-up", function(req,res){
    
    res.json({
        message:"signup endpoint"
    })
})
app.get("/courses", function(req,res){
    res.json({
        message:"signup endpoint"
    })

})
app.get("/users/purchases", function(req,res){
    res.json({
        message:"signup endpoint"
    })

})
app.post("/course/purchase", function(req,res){
    res.json({
        message:"signup endpoint"
    })

})





