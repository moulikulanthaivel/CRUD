import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";


dotenv.config({path:"./setting/.env"})
let port  = process.env.PORT
let host  = process.env.HOST
let mongo  = process.env.MONGO_URL

mongoose.connect(mongo)
.then(()=>{console.log('connected to MongoDB')})
.catch((error)=>{console.log("not connected to DB")})


const app = express();

app.use(express.json()); 

app.listen(port,host, (err)=>{
    if(err) throw err
    console.log(`http://${host}:${port}/`)
})

app.use("/api/user", userRouter)
app.use("/api/auth" , authRouter)

app.use((err , req , res , next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "Internal Server Errror"
    return res.status(statusCode).json({
        success: false ,
        message,
        statusCode
    });
});