import { Router } from "express";
import { CreateUserController } from "../modules/Users/useCases/CreateUserController";

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle)
