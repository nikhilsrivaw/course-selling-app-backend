const { Router } = require('express');
const { purchaseModel, courseModel } = require('../db');
const { userMiddleware } = require('../middleware/user');

const courseRouter = Router();
courseRouter.post("/purchase", userMiddleware, async function (req, res) {

    const userId = req.userId;
    const courseId = req.courseId; 
    // you would expect the user to pay the money 
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message: "you have succesfully brougtht the copurse"
    })

})
courseRouter.get("/preview",async  function (req, res) {
    const courses = await courseModel.find({});


    res.json({
        courses

    })

})



module.exports = {
    courseRouter: courseRouter

}