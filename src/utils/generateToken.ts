import authConfig from '../config/auth';
import { sign } from 'jsonwebtoken';

export function generateToken(user_id: string) {
  const { secret, expiresIn } = authConfig.jwt;

  if (secret) {
    const token = sign({}, secret, {
      subject: user_id,
      expiresIn,
    });
    return token;
  }
}