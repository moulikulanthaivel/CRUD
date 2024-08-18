import express from  "express";
import { userController } from "../controllers/userController.js";

const userRouter = express.Router();


userRouter.get("/", userController)

export default userRouter