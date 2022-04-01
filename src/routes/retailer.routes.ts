import { Router } from "express";
import { AuthenticateRetailerController } from "../modules/Retailers/useCases/AuthenticateRetailerController";
import { CreateRetailerController } from "../modules/Retailers/useCases/CreateRetailerController";

export const retailerRoutes = Router();

const createRetailerController = new CreateRetailerController();
const authenticateRetailerController = new AuthenticateRetailerController();

retailerRoutes.post('/', createRetailerController.handle);
retailerRoutes.post('/auth/login', authenticateRetailerController.handle);