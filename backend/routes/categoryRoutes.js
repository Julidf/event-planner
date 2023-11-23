import { Router } from "express";
import CategoryController from "../controllers/categoryController.js";

const categoryController = new CategoryController()
const categoryRoutes = Router();

categoryRoutes.get("/all", categoryController.getAll)
categoryRoutes.get("/:id", categoryController.getcategoryById)


export default categoryRoutes