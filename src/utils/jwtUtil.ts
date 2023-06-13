import jwt, { JwtPayload } from 'jsonwebtoken';

const jwtUtil = {
  generateToken: (payload: JwtPayload) => {
    const token = jwt.sign(payload, 'secret_key');
    return token;
  },
};

export default jwtUtil;
