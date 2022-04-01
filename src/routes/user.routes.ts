import { Router } from "express";
import { AuthenticateUserController } from "../modules/Users/useCases/AuthenticateUserController";
import { CreateUserController } from "../modules/Users/useCases/CreateUserController";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post('/', createUserController.handle)
userRoutes.post('/auth/login', authenticateUserController.handle);
