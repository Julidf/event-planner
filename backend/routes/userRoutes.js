import { Router } from "express";
import {auth}  from '../middlewares/auth.js';
import * as userController from "../controllers/usersController.js";
import * as authController from "../controllers/authController.js";

const userRoutes = Router();

userRoutes.post("/registration", userController.createUser)
userRoutes.post("/login", authController.login)
userRoutes.post("/logout", authController.logout)
userRoutes
  .route('/')
  .post(auth('manageUsers'), userController.createUser)
  .get(auth('getUsers'), userController.getUsers);

userRoutes
  .route('/:userId')
  .get(auth('getUsers'), userController.getUser)
  .patch(auth('manageUsers'), userController.updateUser)
  .delete(auth('manageUsers'), userController.deleteUser);

export default userRoutes