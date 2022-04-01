import { Retailer } from "@prisma/client";

export interface IRetailerRepository {
  create(full_name: string, cpf: string, cnpj: string, email: string, password: string): Promise<Retailer | null>;
  findByEmail(email: string): Promise<Retailer | null>
  findById(id: string): Promise<Retailer | null>
}