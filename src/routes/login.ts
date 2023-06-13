import express from 'express';
import loginHandler from '../handlers/loginHandler';

const router = express.Router();

router.post('/', loginHandler.login);

export default router;
