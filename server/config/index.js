// env based config function
// supported env - development, staging, production
const envConfig = (developmentValue, stagingValue, productionValue) => {
  return {
    development: developmentValue,
    staging: stagingValue,
    production: productionValue
  }[process.env.NODE_ENV || 'development'];
}

export default Object.freeze({
  configId: envConfig('development', 'staging', 'production')
});
