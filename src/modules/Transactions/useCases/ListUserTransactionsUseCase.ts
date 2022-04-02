import { TransactionRepository } from "../repositories/TransactionRepository";

export class ListUserTransactionsUseCase {
  async execute(user_id: string) {
    const transationRepository = new TransactionRepository();

    const transactions = await transationRepository.listUserTransactions(user_id);

    return transactions;
  }
}