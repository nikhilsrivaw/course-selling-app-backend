const express = require('express');
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/Courses')

const app = express();



//Routing in express , the express Router
app.use("/user", userRouter);
app.use("/course", courseRouter)






app.listen(3000);




