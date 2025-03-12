const express = require('express');
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/Courses');
const { adminRouter } = require('./Routes/admin');

const app = express();



//Routing in express , the express Router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter)







app.listen(3000);




