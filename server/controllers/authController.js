/**
 * Auth Controller
 * 
 * controller for login, signup, verification etc
 */

import config from '../config';

console.log(config);

const login = async (req, res, next) => {
  return res.send(config.configId);
};


export default { login };