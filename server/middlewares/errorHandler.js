import { isCelebrate } from 'celebrate';
import boom from '@hapi/boom';

const errorHandler = (err, req, res, next) => {
  // @hapi/boom error
  if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }

  // celebrate error
  if (isCelebrate(err)) {
    const err = boom.badRequest('Invalid Data');
    return res.status(err.output.statusCode).json(err.output.payload);
  }

  // default error
  res.status(500).send('Server Error!');
}

export default errorHandler;