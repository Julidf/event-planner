import { Router } from "express";
import userRoutes from "./userRoutes.js";
import serviceRoutes from "./serviceRoutes.js";

const indexRoutes =  Router()

indexRoutes.use("/users", userRoutes)
indexRoutes.use("/services", serviceRoutes)

export default indexRoutes