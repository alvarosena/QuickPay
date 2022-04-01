import { User } from "@prisma/client";

export interface IUserRepository {
  create(full_name: string, cpf: string, cnpj: string, email: string, password: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
}