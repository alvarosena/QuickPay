import { Transaction } from "@prisma/client";

export interface ITransactionRepository {
  create(amount: number, user_id: string, retailer_id: string): Promise<Transaction>
}