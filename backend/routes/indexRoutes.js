import { Router } from "express";
import userRoutes from "./userRoutes.js";
import categoryRoutes from "./categoryRoutes.js";

const indexRoutes =  Router()

indexRoutes.use("/users", userRoutes)
indexRoutes.use("/categories", categoryRoutes)

export default indexRoutes