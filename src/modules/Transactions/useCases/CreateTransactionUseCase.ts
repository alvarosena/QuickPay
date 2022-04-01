import { RetailerRepository } from "../../Retailers/repositories/RetailerRepository";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class CreateTransactionUseCase {
  async execute(amount: number, user_id: string, retailer_email: string) {
    const transactionsRepository = new TransactionRepository();
    const retailerRepository = new RetailerRepository();

    const retailer = await retailerRepository.findByEmail(retailer_email);

    if (!retailer) {
      throw new Error("Retailer not found.")
    }

    const transaction = await transactionsRepository.create(amount, user_id, retailer.id);
    return transaction;
  }
}