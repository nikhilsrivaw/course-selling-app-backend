const express = require('express');
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/Courses')



//Routing in express , the express Router
app.use("/user", userRouter);
app.use("/course", courseRouter)

const app = express()

createUserRoutes(app);
createCoursesRoutes(app);





