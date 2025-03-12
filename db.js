const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const userSchema = schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String

})
const adminSchema = schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String

})
const courseSchema = schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId

})
const purchaseSchema = schema({
    userId: ObjectId,
    courseId: ObjectId
})


const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("amdin", adminSchema);
const courseModel = mongoose.Model("course", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);


module.exports= {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}