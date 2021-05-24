const dotenv = require('dotenv');
const path = require('path');

const result = dotenv.config({ path: path.resolve('.env.local') });
if (result.error) {
  throw new Error(
    'Something went wrong while loading environment variables. Please check for the existence of .env file',
  );
}

const { parsed: envs } = result;

module.exports = envs;
