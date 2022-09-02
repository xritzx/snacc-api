// importing modules
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import connectDB from "./config/db.config";
//initializing 
dotenv.config();
const port: number =Number(process.env.Port);

const app: express.Application=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(port,()=>{
    console.log("server started on port", port);
    connectDB;
});