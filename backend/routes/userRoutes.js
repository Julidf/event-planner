import { Router } from "express";
import UserController from "../controllers/userController.js";

const userController = new UserController()
const userRoutes = Router();

userRoutes.post("/registration", userController.createUser)

export default userRoutes