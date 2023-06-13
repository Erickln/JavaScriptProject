import express from 'express';
import usersHandler from '../handlers/usersHandler';

const router = express.Router();

router.get('/', usersHandler.getAllUsers);

export default router;
