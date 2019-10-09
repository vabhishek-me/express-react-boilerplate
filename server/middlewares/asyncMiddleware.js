// async Middlware for async await support in route handlers
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncMiddleware;
