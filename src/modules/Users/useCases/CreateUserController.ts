import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { full_name, cpf, cnpj, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute(full_name, cpf, cnpj, email, password);
    return response.status(201).json(user);
  }
}