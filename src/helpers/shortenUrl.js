// implements url shortening logic

module.exports.generateUniqueId = (length) => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = length; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};
