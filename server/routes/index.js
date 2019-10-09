import express from 'express';
import boom from '@hapi/boom';
const router = express.Router();
import config from '../config';

// routers
import helloRouter from './hello';
import authRouter from './auth';

// routes
router.get('/env', (req, res, next) => res.status(200).send(`Environment: ${config.configId}\n`));
router.use('/hello', helloRouter);
router.use('/auth', authRouter);

// api error handling
router.all('/*', (req, res, next) => {
  return next(boom.notFound('API Route Not Found'));
});

export default router;
