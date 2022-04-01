import { RetailerRepository } from "../../Retailers/repositories/RetailerRepository";
import { UserRepository } from "../../Users/repositories/UserRepository";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class CreateTransactionUseCase {
  async execute(amount: number, user_id: string, retailer_email: string) {
    const transactionsRepository = new TransactionRepository();
    const retailerRepository = new RetailerRepository();
    const userRepository = new UserRepository();

    const user = await userRepository.findById(user_id);
    const retailer = await retailerRepository.findByEmail(retailer_email);

    if (!retailer || !user) {
      throw new Error("Transaction Failed.");
    }

    const transaction = await transactionsRepository.create(amount, user_id, retailer.id);
    return transaction;
  }
}