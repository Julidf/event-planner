import { Router } from "express";
import userRoutes from "./userRoutes.js";

const indexRoutes =  Router()

indexRoutes.use("/usuario", userRoutes)

export default indexRoutes