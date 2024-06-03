import express from "express";
import connectDB from "./database.js";
import userRouter from "./src/routers/userRouter.js";
import homeRouter from "./src/routers/homeRouter.js";
import taskRouter from "./src/routers/taskRouter.js";
const app = express();
app.use(express.json());

connectDB();

app.use(homeRouter);
app.use(userRouter);
app.use(taskRouter);

export default app;
