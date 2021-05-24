const dotenv = require('dotenv');
const path = require('path');

const envs = dotenv.config({ path: path.resolve('.env.local') });

module.exports = envs;

module.exports.BASE_URL = 'http://localhost:8001';
