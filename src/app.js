import express from "express";
import dbConnect from "./database/db";

const app = express();
dbConnect()

app.use(express.json());

export default app;