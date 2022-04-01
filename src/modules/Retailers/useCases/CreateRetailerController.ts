import { Request, Response } from "express";
import { CreateRetailerUseCase } from "./CreateRetailerUseCase";


export class CreateRetailerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { full_name, cpf, cnpj, email, password } = request.body;

    const createRetailerUseCase = new CreateRetailerUseCase();

    const retailer = await createRetailerUseCase.execute(full_name, cpf, cnpj, email, password);
    return response.status(201).json(retailer);
  }
}