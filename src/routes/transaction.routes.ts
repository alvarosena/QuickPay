import { Router } from "express";
import { CreateTransactionController } from "../modules/Transactions/useCases/CreateTransactionController";
import { jwtRequiredUser } from '../middlewares/jwtRequiredUser';

export const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();

transactionRoutes.post('/', jwtRequiredUser, createTransactionController.handle);