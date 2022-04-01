import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { amount, retailer_email } = request.body;

    const createTransactionUseCase = new CreateTransactionUseCase();

    const transaction = await createTransactionUseCase.execute(amount, user_id, retailer_email);
    return response.status(201).json(transaction);
  }
}