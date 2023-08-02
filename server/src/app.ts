import express, { Application } from "express";
import cors from "cors";
import messageRouter from "./modules/message/message.router";
const app: Application = express();

app.use(cors());

// for body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/user', userRouter);
app.use('/message', messageRouter);

export default app;