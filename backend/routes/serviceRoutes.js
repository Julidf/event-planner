import { Router } from "express";
import ServiceController from "../controllers/serviceController.js";

const serviceController = new ServiceController()
const serviceRoutes = Router();

serviceRoutes.get("/all", serviceController.getAll)
serviceRoutes.post("/create", serviceController.createService)
serviceRoutes.get("/:id", serviceController.getServiceById)
serviceRoutes.put("/:id", serviceController.updateService)
serviceRoutes.delete("/:id", serviceController.deleteService)

export default serviceRoutes