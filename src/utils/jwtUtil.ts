import jwt, { JwtPayload } from 'jsonwebtoken';

export const jwtUtil = {
  generateToken: (payload: JwtPayload): string => {
    const token = jwt.sign(payload, 'secret_key');
    return token;
  },
};
