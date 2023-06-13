import { Request, Response, NextFunction } from 'express';
import loginController from '../controllers/loginController';

const loginHandler = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await loginController.login(req.body);
      res.json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default loginHandler;
