import { Router } from "express";
import { CreateRetailerController } from "../modules/Retailers/useCases/CreateRetailerController";

export const retailerRoutes = Router();

const createRetailerController = new CreateRetailerController();

retailerRoutes.post('/', createRetailerController.handle);