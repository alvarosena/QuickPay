import { RetailerRepository } from "../repositories/RetailerRepository";
import { hash } from 'bcrypt';

export class CreateRetailerUseCase {
  async execute(full_name: string, cpf: string, cnpj: string, email: string, password: string) {
    const retailerRepository = new RetailerRepository();

    const userAlreadyExists = await retailerRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const retailer = await retailerRepository.create(full_name, cpf, cnpj, email, hashedPassword);
    return retailer;
  }
}