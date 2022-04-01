import { Router } from "express";
import { CreateTransactionController } from "../modules/Transactions/useCases/CreateTransactionController";
import { jwtRequired } from '../middlewares/jwtRequired';

export const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();

transactionRoutes.post('/', jwtRequired, createTransactionController.handle);