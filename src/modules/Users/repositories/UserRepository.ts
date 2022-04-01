import { User } from '@prisma/client';
import { prisma } from '../../../database';
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  async create(full_name: string, cpf: string, cnpj: string, email: string, password: string): Promise<User> {
    const user = await prisma.user.create({
      data: {
        full_name,
        cpf,
        cnpj,
        email,
        password,
      }
    });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });
    return user;
  }
}