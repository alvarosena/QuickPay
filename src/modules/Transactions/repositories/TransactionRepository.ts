import { Transaction } from "@prisma/client";
import { prisma } from "../../../database";
import { ITransactionRepository } from "./ITransactionRepository";

export class TransactionRepository implements ITransactionRepository {
  async create(amount: number, user_id: string, retailer_id: string): Promise<Transaction> {
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        user_id,
        retailer_id
      }
    });
    return transaction;
  }
}