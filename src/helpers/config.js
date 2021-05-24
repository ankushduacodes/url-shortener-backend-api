const dotenv = require('dotenv');
const path = require('path');

const envs = dotenv.config({ path: path.resolve('.env.local') });

module.exports = envs;

module.exports.BASE_URL = 'https://url-shortnr-api.herokuapp.com';
