import express from "express";
import dbConnect from "./database/db";
import userRouter from "./routes/userRoute"
import authenticationRoutes from './routes/loginRoutes';
const app = express();
dbConnect()

app.use(express.json());
app.use('/villageAPI/users', userRouter)
app.use('/villageAPI/auth',authenticationRoutes);

export default app;