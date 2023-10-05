import { Router } from "express";

import userController from "../controllers/userController.js";

const usuarioController = new userController()

const userRoutes = Router();

userRoutes.get("/me", usuarioController.getUser)

export default userRoutes