import { celebrate } from 'celebrate';

const validationOptions = {
  abortEarly: true, // abort after the first validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: { arrays: false, objects: true } // remove unknown keys from objects  but not arrays
};

const validator = schema => celebrate(schema, validationOptions);

export default validator;