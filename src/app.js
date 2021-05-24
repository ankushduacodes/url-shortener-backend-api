const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const path = require('path');
const Home = require('./routes/index');

const notFoundTempalte = fs.readFileSync(path.resolve(`${__dirname}/static/notFound.html`), 'utf-8');

const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

const corsOptions = {
  origin: 'https://url-shortener-frontnd.herokuapp.com/',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/', Home);

app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.send(notFoundTempalte);
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
  next();
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
  .on('error', (error) => {
    if (error.errno === 'EADDRINUSE') {
      console.log('Port already in use');
    } else {
      console.log(error);
    }
  });
