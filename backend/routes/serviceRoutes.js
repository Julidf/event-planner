import { Router } from "express";
import ServiceController from "../controllers/serviceController.js";

const serviceController = new ServiceController()
const serviceRoutes = Router();

serviceRoutes.post("/all-services", serviceController.createService)

export default serviceRoutes