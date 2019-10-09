import express from 'express';
import { Joi } from 'celebrate';
import { asyncMiddleware, validator } from '../middlewares';

const router = express.Router();

router.get(
  '/',
  validator({
    query: Joi.object().keys({
      name: Joi.string().required()
    })
  }),
  asyncMiddleware(async (req, res, next) => {
    res.send(`Hello ${req.query.name}!`);
  })
);

export default router;
