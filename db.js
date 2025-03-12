const {schema, default: mongoose} = require('mongoose');

const userSchema = schema({
    email:{type:String , unique:true},
    password:String,
    firstName:String,
    lastName:String

})
const adminSchema = schema({
    email:String,
    password:String,
    firstName:String,
    lastName:String
    
})
const courseSchema = schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    


    
})
const purchaseSchema = schema({
    
})


const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("amdin", adminSchema);
const courseModel = mongoose.Model("course", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);
