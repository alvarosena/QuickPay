import { compare } from "bcrypt";
import { generateToken } from "../../../utils/generateToken";
import { UserRepository } from "../repositories/UserRepository"

export class AuthenticateUserUseCase {
  async execute(email: string, password: string) {
    const userRepository = new UserRepository();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found.");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Password don't match!");
    }

    const token = generateToken(user.id);

    const accessToken = {
      access_token: token,
    }

    return accessToken;
  }
}