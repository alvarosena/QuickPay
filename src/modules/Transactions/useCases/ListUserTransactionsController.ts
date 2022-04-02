import { Request, Response } from "express";
import { ListUserTransactionsUseCase } from "./ListUserTransactionsUseCase";

export class ListUserTransactionsController {
  async handle(request: Request, response: Response) {
    const { id: user_id } = request.user;

    const listUserTransactionsUseCase = new ListUserTransactionsUseCase();

    const transactions = await listUserTransactionsUseCase.execute(user_id);
    return response.json(transactions);
  }
}