import express from 'express';
import config from '../config';
import { asyncMiddleware } from '../middlewares';
import { authController } from '../controllers';

const router = express.Router();

router.get('/login', asyncMiddleware(authController.login));

export default router;
