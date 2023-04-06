import express from "express";
import dbConnect from "./database/db";
import userRouter from "./routes/userRoute"
import authenticationRoutes from './routes/loginRoutes';
import swaggerUI from "swagger-ui-express";
import docs from './api_docs/documentation'
const app = express();
dbConnect()

app.use(express.json());
app.use('/villageAPI/users', userRouter)
app.use('/villageAPI/auth',authenticationRoutes);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

export default app;