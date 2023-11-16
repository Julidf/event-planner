import { Router } from "express";
import userRoutes from "./userRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import {authRoutes} from "./authRoutes.js";

const indexRoutes =  Router()

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/categories", categoryRoutes);
indexRoutes.use("/services", serviceRoutes);
indexRoutes.use("/auth", authRoutes);

export default indexRoutes