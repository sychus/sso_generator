const { v4: uuidv4 } = require('uuid');

export const getContextKey = () => {
  return uuidv4().replace(/-/g, '');
}

