import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcrypt';

export class CreateUserUseCase {
  async execute(full_name: string, cpf: string, cnpj: string, email: string, password: string) {
    const userRepository = new UserRepository();

    const userAlreadyExists = await userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const user = await userRepository.create(full_name, cpf, cnpj, email, hashedPassword);
    return user;
  }
}