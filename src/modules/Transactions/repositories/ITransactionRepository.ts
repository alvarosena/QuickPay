import { Transaction } from "@prisma/client";

export interface ITransactionRepository {
  create(amount: number, user_id: string, retailer_id: string): Promise<Transaction>
  listUserTransactions(user_id: string): Promise<Transaction[]>
  listReatilerTransactions(retailer_id: string): Promise<Transaction[]>
}