import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginController = (req: Request, res: Response) => {
  // Authenticate user credentials and generate JWT token
  const userId = 1; // Replace with actual user authentication logic
  const userRole = 'ADMIN'; // Replace with actual user authentication logic
  const token = jwt.sign({ userId, userRole }, 'secret_key');

  res.json({ token });
};
