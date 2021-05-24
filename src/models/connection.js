const mongoose = require('mongoose');

const envs = require('../helpers/config');

const urlSchema = require('./schemas/urlSchema');

const username = envs.parsed.USERNAME || process.env.USERNAME;
const password = envs.parsed.PASSWORD || process.env.PASSWORD;

const mongoUri = `mongodb+srv://${username}:${password}@urlcluster.rnftd.mongodb.net/ShortUrls?retryWrites=true&w=majority`;

mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
)
  .then()
  .catch(console.log);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('connected', () => console.log('Connection Successful'));

module.exports = mongoose.model('Url', urlSchema);
