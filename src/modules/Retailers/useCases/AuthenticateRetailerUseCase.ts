import { compare } from "bcrypt";
import { generateToken } from "../../../utils/generateToken";
import { RetailerRepository } from "../repositories/RetailerRepository";

export class AuthenticateRetailerUseCase {
  async execute(email: string, password: string) {
    const retailerRepository = new RetailerRepository();

    const retailer = await retailerRepository.findByEmail(email);

    if (!retailer) {
      throw new Error("Retailer not found.")
    }

    const passwordMatch = await compare(password, retailer.password);

    if (!passwordMatch) {
      throw new Error("Password don't match!");
    }

    const token = generateToken(retailer.id);

    const acessToken = {
      access_token: token,
    }

    return acessToken;
  }
}