import jwtUtil from '../utils/jwtUtil';

const loginService = {
  login: async (credentials: any) => {
    // Authenticate user credentials and generate JWT token
    const userId = 1; // Replace with actual user authentication logic
    const userRole = 'ADMIN'; // Replace with actual user authentication logic
    const token = jwtUtil.generateToken({ userId, userRole });
    return token;
  },
};

export default loginService;
