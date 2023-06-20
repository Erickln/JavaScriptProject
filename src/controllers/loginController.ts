import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/loginService';

export class LoginController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      // Authenticate user credentials and generate JWT token
      const token = await loginService.login(req.body);
      res.json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
