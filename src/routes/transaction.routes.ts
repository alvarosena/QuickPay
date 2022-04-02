import { Router } from "express";
import { CreateTransactionController } from "../modules/Transactions/useCases/CreateTransactionController";
import { jwtRequiredUser } from '../middlewares/jwtRequiredUser';
import { ListUserTransactionsController } from "../modules/Transactions/useCases/ListUserTransactionsController";

export const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listUserTransactionsController = new ListUserTransactionsController();

transactionRoutes.post('/', jwtRequiredUser, createTransactionController.handle);
transactionRoutes.get('/', jwtRequiredUser, listUserTransactionsController.handle);