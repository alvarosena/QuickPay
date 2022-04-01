import { Retailer } from '@prisma/client';
import { prisma } from '../../../database';
import { IRetailerRepository } from "./IRetailerRepository";

export class RetailerRepository implements IRetailerRepository {
  async create(full_name: string, cpf: string, cnpj: string, email: string, password: string): Promise<Retailer> {
    const retailer = await prisma.retailer.create({
      data: {
        full_name,
        cpf,
        cnpj,
        email,
        password,
      }
    });
    return retailer;
  }

  async findByEmail(email: string): Promise<Retailer | null> {
    const retailer = await prisma.retailer.findFirst({
      where: {
        email
      }
    });
    return retailer;
  }

  async findById(id: string): Promise<Retailer | null> {
    const retailer = await prisma.retailer.findFirst({
      where: {
        id
      }
    });
    return retailer;
  }

  async update(id: string, cash: number): Promise<Retailer> {
    const retailer = await prisma.retailer.update({
      where: {
        id,
      },
      data: {
        cash,
      }
    });

    return retailer;
  }
}