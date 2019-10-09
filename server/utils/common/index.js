const truncateString = (str, len, padWith = '...') => {
  return str.length <= len ? str : `${str.slice(0, len)}${padWith}`;
};

export { truncateString };
