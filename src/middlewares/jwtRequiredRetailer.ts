import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import { RetailerRepository } from '../modules/Retailers/repositories/RetailerRepository';

interface IPayload {
  sub: string
}

export async function jwtRequiredRetailer(request: Request, response: Response, next: NextFunction) {
  try {
    const { secret } = authConfig.jwt;
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new Error("Token is missing.")
    }

    const [, token] = authHeader.split(" ");

    const { sub: retailer_id } = verify(token, secret) as IPayload;
    const retailerRepository = new RetailerRepository();

    const retailer = await retailerRepository.findById(retailer_id);

    if (!retailer) {
      throw new Error("User not found.")
    }

    request.user = {
      id: retailer_id
    }

    next();
  }
  catch (error) {
    return response.status(400).json(error);
  }
} 