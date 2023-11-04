import { Router } from "express";
import CategoryController from "../controllers/categoryController.js";

const categoryController = new CategoryController()
const categoryRoutes = Router();

categoryRoutes.get("/all", categoryController.getAll)

export default categoryRoutes