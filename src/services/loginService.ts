import { UserCredentials } from '../models/userModel';
import { jwtUtil } from '../utils/jwtUtil';

export const loginService = {
  login: async (credentials: UserCredentials): Promise<string> => {
    // Authenticate user credentials and generate JWT token
    const userId = 1; // Replace with actual user authentication logic
    const userRole = 'ADMIN'; // Replace with actual user authentication logic
    const token = jwtUtil.generateToken({ userId, userRole });
    return token;
  },
};
