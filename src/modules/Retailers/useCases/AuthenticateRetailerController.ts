import { Request, Response } from "express";
import { AuthenticateRetailerUseCase } from "./AuthenticateRetailerUseCase";

export class AuthenticateRetailerController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateRetailerUseCase = new AuthenticateRetailerUseCase();

    const accessToken = await authenticateRetailerUseCase.execute(email, password);
    return response.json(accessToken);
  }
}