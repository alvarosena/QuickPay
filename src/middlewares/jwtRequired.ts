import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import { UserRepository } from '../modules/Users/repositories/UserRepository';

interface IPayload {
  sub: string
}

export async function jwtRequired(request: Request, response: Response, next: NextFunction) {
  try {
    const { secret } = authConfig.jwt;
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new Error("Token is missing.")
    }

    const [, token] = authHeader.split(" ");

    const { sub: user_id } = verify(token, secret) as IPayload;
    const userRepository = new UserRepository();

    const user = userRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found.")
    }

    request.user = {
      id: user_id
    }

    next();
  }
  catch (error) {
    return response.status(400).json(error);
  }
} 