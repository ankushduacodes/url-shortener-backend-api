const mongoose = require('mongoose');

const { USERNAME, PASSWORD } = require('../helpers/config');

const urlSchema = require('./schemas/urlSchema');

const mongoUri = `mongodb+srv://${USERNAME}:${PASSWORD}@urlcluster.rnftd.mongodb.net/ShortUrls?retryWrites=true&w=majority`;

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
