import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:"./setting/.env"})
let port  = process.env.PORT
let host  = process.env.HOST
let mongo  = process.env.MONGO_URL

mongoose.connect(mongo)
.then(()=>{console.log('db connected')})
.catch((err)=>{console.log('db not connected')})


const app = express();

app.listen(3000, ()=>{
    console.log("server 3000")
})