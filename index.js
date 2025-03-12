require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose")
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/Courses');
const { adminRouter } = require('./Routes/admin');

const app = express();
app.use(express.json());


//Routing in express , the express Router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter)





async function main(){
    mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("listening ont he oport ")
}

main()




