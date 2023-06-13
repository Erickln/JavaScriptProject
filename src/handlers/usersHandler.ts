import { Request, Response, NextFunction } from 'express';
import usersController from '../controllers/usersController';

const usersHandler = {
  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await usersController.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Error retrieving user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default usersHandler;
